import pandas as pd
import numpy as np
import math
import nltk
nltk.download('punkt')
from nltk import sent_tokenize
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
from scipy.signal import argrelextrema

MODEL = 'all-MiniLM-L6-v2'
TEXT = "I'm really anxious about the plane crash in Nepal. How many cats are there in person?"
model = SentenceTransformer(MODEL)

def embed_sentences(text):
    sent_embeddings = sent_tokenize(text)
    for i in range (len(sent_embeddings)):
        sent_embeddings[i] = model.encode(sent_embeddings[i])
    return sent_embeddings

def create_similarity_matrix(sent_embeddings):
    similarity_matrix = cosine_similarity(sent_embeddings)
    return similarity_matrix

def rev_sigmoid(x):
    return (1 / (1 + math.exp(0.5*x)))

def find_splitting_points(similarity_matrix):
    size = 14
    x = np.linspace(-10, 10, size)
    y = np.vectorize(rev_sigmoid)
    activation_weights = np.pad(y(x), (0, similarity_matrix.shape[0] - size))
    diagonals = [similarity_matrix.diagonal(each) for each in range(0, similarity_matrix.shape[0])]
    diagonals = [np.pad(each, (0, similarity_matrix.shape[0]-len(each))) for each in diagonals]
    diagonals = np.stack(diagonals)
    diagonals = diagonals * activation_weights.reshape(-1, 1)
    weighted_sum = np.sum(diagonals, axis = 0)
    return weighted_sum
     
similarity_matrix = create_similarity_matrix(embed_sentences(TEXT))
activated_similarities = find_splitting_points(similarity_matrix)
minmimas = argrelextrema(activated_similarities, np.less, order=2)