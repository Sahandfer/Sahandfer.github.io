---
title:  "Transformers: What You Really Need"
mathjax: true
layout: post
categories: NLP, DL, Tutorial
---

In this post, I will go through all you need to know to get started on transformers. The model architecture not the movie.


# **May I have your attention, please?**

If you've spent more than 2 hours on an NLP course, it's likely that you've heard someone mention *transformers* or a paper called *Attention is All You Need* [1]. Transformers have become the building blocks of many machine learning applications, especially in the field of Natural Language Processing, to the point that it's hard to find papers that neither use nor mention them in some way, shape or form. In this article, I'll be giving, or at least try to give, a comprehensive review of what transformers are, how they came to be, and how they have evolved since they first appeared in [1]. So sit back, relax, and let's dive in.

## **Seq2Seq**

We don't have time for a name, just call it sequence to sequence, but cooler.

### **A bit of history**

It's the fall of 2014. Google's killing the translation game with Google Translate and 15-year-old me still has no clue how they do it. Back around those times, they release *Sequence to Sequence Learning with Neural Networks* [2], which basically said Deep Learning and Neural Networks are great and all, but we want an architecture that maps one sequence to the other. Why is that needed, you say? Well, look at the following two sentences:

> English: Jay Alammar makes better articles than you.
>
>
> Chinese: Jay Alammar 作的文章比你的好。

If I was making a machine that could translate text from English to Chinese, or vice versa, wouldn't it be convenient to have a machine that could learn the mapping between these two sequences? And that's exactly what they did. They used one Long Short Term Memory (LSTM) unit, to map the first sequence to a vector with a fixed dimension, known as the context vector. This process is referred to as *encoding*. Then, they use a second LSTM to find the target sequence from this context vector, which is referred to as *decoding*. At this point, one might imagine if Vaswani, et al. had come up with this idea, the paper would have probably have been titled *Encoding/Decoding is All You Need*.

### **Applications**

I know I've only touched upon machine translation, but there are other applications that can benefit from mapping one sequence to the other. Let's say that in the above example, the English sentence is given and I ask you the question: "Well, how do you say that in Chinese?". Now, by translating this sentence, you have actually answered my question as well. You see where I'm going with this? Now, let's say we use "What is the capital of China?" as the first sentence and "Beijing" as the second. Then learning a mapping between these two and similar pairs enables us to answer questions! Well how about we use one turn of the conversation as the first sentence and the reply to that turn as the second. Then the model learns how to respond to your statements (hypothetically, of course, there are other things to consider here). So, we end up with at least the following NLP applications for Seq2Seq:

1. Machine Translation
2. Question Answering
3. Conversational Modeling

This architecture has become a fundamental part of many NLP applications and is still being used in 2021. That's why I'm going to talk about the math behind it now, so this is your chance to skip to the next part if you're not a big fan of equations. I'll give you 3 seconds to decide.

### **How does it work?**

Glad you decided to come here. Let's say we have the following two sequences

$$
S = (s_1, s_2, s_3, ..., s_n) \quad \text{and} \quad T = (t_1, t_2, t_3, ..., t_n)
$$

Where S is the input sequence and T is the target sequence. In the case of the mentioned translation, the English sentence would be S and the Chinese translation would be T. Therefore, our model should estimate the probability of outputing T, given that the input sequence is S.

$$
p(T|S) = p(t_1, t_2,t_3, ..., t_n|s_1, s_2, s_3, ..., s_n) 
$$

Initially, the LSTM unit encodes sequence S to get a context vector representation C, which is the last hidden state of the unit. Now that we have V, we start decoding and generate the output sequence O one word at a time, knowing that this is the RNN fashion for producing the output.

$$ \text{Assuming}\quad O = o_1, o_2, o_3, ..., o_n $$

$$ \text{We find}\quad p(O|S)=p(O|C) = \prod_{m=1}^n p(o_m|C, o_1, o_2, ..., o_{m-1}) $$

Evidently, the model's not going to get everything right from the beginning. That's why we didn't directly get T as the output sequence. Our job now is to look at the output sequence O, compare it to the sequence we want it to give us (i.e. target sequence T), and penalize it for not getting the right sequence until it learns the mapping. This could be done using Stochastic Gradient Descent.

### **Something's wrong, I can feel it**

I mentioned how the model first converts the input sequence to a vector representation, which happens to have a fixed dimension. Well, it turned out that this made it challenging to deal with long sequences. Why, you may ask? Put yourself in the encoder's shoes and imagine that I am a talkative friend who just told you all about his day and asked you to summarize it all in one sentence (this would be the same as fitting a long sequence into a fixed dimension vector). You would be devastated, right? and not necessarily because you didn't really care when you asked me how my day was and just wanted to be polite, but rather because it's so hard, maybe even impossible, to include every significant detail in just one sentence and not miss anything important. Now, think you're a decoder and your encoder friend somehow managed to give you a sentence summarizing my day and now, you have to reconstruct the whole day and everything that happened using that one sentence. As sweat comes down your forehead and you sigh with exhaustion, you ask yourself *isn't there be a better way to deal with these things?*

## **Attention**

Can I have your attention please?

### **It's just a bunch of weights**

In 2015, Bahdanau, et al. [3] came up with the *attention* mechanism to address the problem of dealing with long sequences in machine translation. Essentially, this approach suggests that we don't really need to encode the full sentence to a context vector. Instead, they say how about we let the decoder choose which part to pay **attention** to at each time step. If want to know how this is actually achieved, let's delve deeper into the math behind it.

### **More equations**

Let's use the same terminology as before. We have a sequence S as input (with n words) and we want to get a sequence T as output. In this paper, they use a bidirectional RNN encoder, which gives two hidden states for each time step (forward and backward). The encoder state hi is assumed as the concatenation of these two states. Accordingly, the context vector is calculated as the following weighted average:

$$ c_i= \sum_{j=1}^{n} a_{ij}h_i $$

$$ \text{where} \quad a_{ij} = softmax(e_{ij}) = \frac{exp(e_{ij})}{\sum_{k=1}^{n}exp(e_{ik})} $$

$$ \text{and}\quad e_{ij} = am(s_{i-1}, h_j) $$

aij is the weight showing how much of the input at input position j should be considered for output position i. In addition, am is an alignment model that tells us how well the input at position jand output at position i match. This is a feed-forward neural network with tanh activation, which is trained alongside other parts of the model. Hence, this term can be expanded as follows:

$$ e_{ij} = am(s_{i-1}, h_j) = v_a^Ttanh(W_a(s_{i-1})+U_a(h_j)) $$

$$ \text{where }v_a^T, W_a, \text{ and }U_a \text{ are trainable parameters } $$

### **What did it cost?**

If you were one of the few people that read the above equations, you would notice that we need to calculate aij for every single input and output position pairs i and j. Now, let's say we have 100 words in the input and we plan to generate a sequence of 100 words. Simple combinatorics tells us that in this case we need to calculate 100*100 = 10000 values. If you're someone that gets bugged with this time of computational complexity, then maybe you need something more than just simple attention.

## **Self-Attention**

It's the year 2016. While many people are concerned about the american election results, the paper *Long Short-Term Memory-Networks for Machine Reading* [4] comes out and introduces a concept we now know and love as *self-attention*. As the title suggests, they use this mechanism to do machine reading and the reason they used it was because they wanted to find out the relation of each word in a sequence to the previous words in the same sequence. For instance, if a machine is reading the sentence "I have a cat and it hates me", we want it to know what it refers to (the word "cat" in this case). So, how can we realize self-attention?

### **Mafs**

The self-attention mechanism relies on three vectors of a fixed dimension D: key (K), value (V) and query (Q). Matrices containing these vectors (namely key, value, and query matrices) are usually randomly initialized and then trained during the training process. Then, the we follow the below process to calculate self-attention.

1.

We go back to 2013 and ask mikolov [5] if we could borrow his word embeddings. Then, we look up the word vector of each word in the input sequence using this embedding. Then, we multiply this word vector by the three matrices respectively to get the K, V, Q vectors.

2.

We calculate a score S as the dot product of K and Q vectors.

3.

Divide the scores by square root of D. Apparently this helps with the gradient calculation. When you're done doing that, do a softmax on all the scores because we want a nice positive distribution that sums up to 1.

4.

Now, multiply V by the scores you just got. Why? because now you know what values to focus on: your score certainly got my attention.

5.

Look at the sky and take a deep breath. **You got this!**

6.

Calculate the sum of V.

## **Transformers**

If you found this article useful, you can cite it in your work as follows:

`@article{sam2021transformers,
  title   = "Is Attention Really All We Need? A comprehensive review of Transformers",
  author  = "Sabour, Sahand",
  journal = "saMLog",
  year    = "2021",
  month   = "7",
  url     = "https://sahandfer.github.io/posts/Transformers/"
}`

# **References**

[1]