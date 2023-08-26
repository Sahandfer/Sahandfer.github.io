---
title: 'Rethinking and Refining the Distinct Metric'
collection: publications
permalink: /publication/2023/5/22-Rethinking-and-Refining-the-Distinct-Metric
excerpt: This paper proposes an alternative to the Distinct metric for evaluating generation diversity!
date: 2023/5/22
venue: 'Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Short Papers)'
---
Distinct is a widely used automatic metric for evaluating diversity in language generation tasks.However, we observed that the original approach to calculating distinct scores has evident biases that tend to assign higher penalties to longer sequences. We refine the calculation of distinct scores by scaling the number of distinct tokens based on their expectations. We provide both empirical and theoretical evidence to show that our method effectively removes the biases existing in the original distinct score. Our experiments show that our proposed metric, Expectation-Adjusted Distinct (EAD), correlates better with human judgment in evaluating response diversity.To assist future research, we provide an example implementation at https://github.com/lsy641/Expectation-Adjusted-Distinct.

[[Paper]](https://aclanthology.org/2022.acl-short.86.pdf)    [[Code]](https://github.com/lsy641/Expectation-Adjusted-Distinct)

Citation: 
```latex
@inproceedings{liu-etal-2022-rethinking,
    title = "Rethinking and Refining the Distinct Metric",
    author = "Liu, Siyang  and
      Sabour, Sahand  and
      Zheng, Yinhe  and
      Ke, Pei  and
      Zhu, Xiaoyan  and
      Huang, Minlie",
    booktitle = "Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 2: Short Papers)",
    month = may,
    year = "2022",
    address = "Dublin, Ireland",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2022.acl-short.86",
    doi = "10.18653/v1/2022.acl-short.86",
    pages = "762--770"
}
```
    