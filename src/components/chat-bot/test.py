

document_text = vectorstore.similarity_search_by_vector(
                embeddings.embed_query(question), k=1
            )[0].page_content

prompt = f"""
    You are a developer bot. Answer the following user query using the retrieved document:
    {question}
    The retrieved document has the following text:
    {document_text}
"""

prompt = [{"role": "system", "content": prompt}]
response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo", messages=prompt, temperature=0.1
)
result = response.choices[0]["message"]["content"]
scores = {
    'hallucination_score': 0.1,
    'relevancy_score': 0.2
}
output = {
    'response': result,
    'scores': scores
}