import pandas as pd
import json
df = pd.read_excel('internacoes_covid_19.xlsx')
data = df.to_json(orient='index')

with open('src/data/internacoes_covid_19.json','w') as f:
    json.dump(data, f)