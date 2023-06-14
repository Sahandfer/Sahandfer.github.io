import pandas as pd

df = pd.read_csv("publications.csv")

entries = []
titles = []
for i, paper in df.iterrows():
    entries.append(
        f"""---
title: '{paper['title']}'
collection: publications
permalink: /publication/{paper["date"]}-{paper["title"].replace(" ","-")}
excerpt: {paper['desc']}
date: {paper["date"]}
venue: '{paper["venue"]}'
---
{paper['abstract']}

[View Paper]({paper['url']})

Citation: 
```latex
    {paper['citation']}
```
    """
    )
    titles.append(f"{paper['date']}-{paper['title'].replace(' ','-')}")

for entry, title in zip(entries, titles):
    with open(f"./{title}.md", "w") as f:
        f.write(entry)
