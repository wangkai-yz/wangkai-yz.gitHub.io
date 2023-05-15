﻿const generatedBibEntries = {
    "bordes2013translating": {
        "abstract": "We consider the problem of embedding entities and relationships of multi-relational data in low-dimensional vector spaces. Our objective is to propose a canonical model which is easy to train, contains a reduced number of parameters and can scale up to very large databases. Hence, we propose, TransE, a method which models relationships by interpreting them as translations operating on the low-dimensional embeddings of the entities. Despite its simplicity, this assumption proves to be powerful since extensive experiments show that TransE significantly outperforms state-of-the-art methods in link prediction on two knowledge bases. Besides, it can be successfully trained on a large scale data set with 1M entities, 25k relationships and more than 17M training samples.",
        "author": "Bordes, Antoine and Usunier, Nicolas and Garcia-Duran, Alberto and Weston, Jason and Yakhnenko, Oksana",
        "booktitle": "Advances in Neural Information Processing Systems",
        "doi": "10.1109/ijcnn52387.2021.9533548",
        "editor": "C.J. Burges and L. Bottou and M. Welling and Z. Ghahramani and K.Q. Weinberger",
        "journal": "Advances in neural information processing systems",
        "keywords": "type: Translation model, type2: link prediction triple classification,Embedding, Multi-Relational Data, TransE Model, Translating, Knowledge Graph, Triplets, Vector Space",
        "publisher": "Curran Associates, Inc.",
        "title": "Translating embeddings for modeling multi-relational data",
        "type": "article",
        "url": "https://proceedings.neurips.cc/paper_files/paper/2013/file/1cecc7a77928ca8133fa24680a88d2f9-Paper.pdf",
        "volume": "26",
        "year": "2013"
    },
    "dettmers2018convolutional": {
        "abstract": "Link prediction for knowledge graphs is the task of predicting missing relationships between entities. Previous work on link prediction has focused on shallow, fast models which can scale to large knowledge graphs. However, these models learn less expressive features than deep, multi-layer models \u2014 which potentially limits performance. In this work we introduce ConvE, a multi-layer convolutional network model for link prediction, and report state-of-the-art results for several established datasets. We also show that the model is highly parameter efficient, yielding the same performance as DistMult and R-GCN with 8x and 17x fewer parameters. Analysis of our model suggests that it is particularly effective at modelling nodes with high indegree \u2014 which are common in highly-connected, complex knowledge graphs such as Freebase and YAGO3. In addition, it has been noted that the WN18 and FB15k datasets suffer from test set leakage, due to inverse relations from the training set being present in the test set \u2014 however, the extent of this issue has so far not been quantified. We find this problem to be severe: a simple rule-based model can achieve state-of-the-art results on both WN18 and FB15k. To ensure that models are evaluated on datasets where simply exploiting inverse relations cannot yield competitive results, we investigate and validate several commonly used datasets \u2014 deriving robust variants where necessary. We then perform experiments on these robust datasets for our own and several previously proposed models, and find that ConvE achieves state-of-the-art Mean Reciprocal Rank across all datasets.",
        "author": "Dettmers, Tim and Minervini, Pasquale and Stenetorp, Pontus and Riedel, Sebastian",
        "booktitle": "Proceedings of the AAAI conference on artificial intelligence",
        "doi": "10.1609/aaai.v32i1.11573",
        "keywords": "type: Neural Network, type2: link prediction,knowledge graphs, representation learning, convolution",
        "number": "1",
        "title": "Convolutional 2d knowledge graph embeddings",
        "type": "inproceedings",
        "url": "https://arxiv.org/pdf/1707.01476.pdf",
        "volume": "32",
        "year": "2018"
    },
    "ji2015knowledge": {
        "abstract": "Knowledge graphs are useful resources for numerous AI applications, but they are far from completeness. Previous work such as TransE, TransH and TransR/CTransR regard a relation as translation from head entity to tail entity and the CTransR achieves state-of-the-art performance. In this paper, we propose a more fine-grained model named TransD, which is an improvement of TransR/CTransR. In TransD, we use two vectors to represent a named symbol object (entity and relation). The first one represents the meaning of a(n) entity (relation), the other one is used to construct mapping matrix dynamically. Compared with TransR/CTransR, TransD not only considers the diversity of relations, but also entities. TransD has less parameters and has no matrix-vector multiplication operations, which makes it can be applied on large scale graphs. In Experiments, we evaluate our model on two typical tasks including triplets classification and link prediction. Evaluation results show that our approach outperforms stateof-the-art methods.",
        "author": "Ji, Guoliang and He, Shizhu and Xu, Liheng and Liu, Kang and Zhao, Jun",
        "booktitle": "Proceedings of the 53rd annual meeting of the association for computational linguistics and the 7th international joint conference on natural language processing (volume 1: Long papers)",
        "doi": "10.3115/v1/p15-1067",
        "keywords": "type: Matrix calculates, type2: link prediction triple classification, Knowledge graphs, TransD, Mapping matrix, TransR/CTransR, Large scale graphs, Link prediction",
        "pages": "687--696",
        "title": "Knowledge graph embedding via dynamic mapping matrix",
        "type": "inproceedings",
        "url": "https://aclanthology.org/P15-1067.pdf",
        "year": "2015"
    },
    "lin2015learning": {
        "abstract": "Knowledge graph completion aims to perform link prediction between entities. In this paper, we consider the approach of knowledge graph embeddings. Recently, models such as TransE and TransH build entity and relation embeddings by regarding a relation as translation from head entity to tail entity. We note that these models simply put both entities and relations within the same semantic space. In fact, an entity may have multiple aspects and various relations may focus on different aspects of entities, which makes a common space insufficient for modeling. In this paper, we propose TransR to build entity and relation embeddings in separate entity space and relation spaces. Afterwards, we learn embeddings by first projecting entities from entity space to corresponding relation space and then building translations between projected entities. In experiments, we evaluate our models on three tasks including link prediction, triple classification and relational fact extraction. Experimental results show significant and consistent improvements compared to state-of-the-art baselines including TransE and TransH.",
        "author": "Lin, Yankai and Liu, Zhiyuan and Sun, Maosong and Liu, Yang and Zhu, Xuan",
        "booktitle": "Proceedings of the AAAI conference on artificial intelligence",
        "doi": "10.1609/aaai.v29i1.9491",
        "keywords": "type: Translation model, type2: link prediction triple classification knowledge extraction from text,knowledge graph embedding, knowledge graph completion, relation extraction, knolwedge representation",
        "number": "1",
        "title": "Learning entity and relation embeddings for knowledge graph completion",
        "type": "inproceedings",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/download/9491/9350",
        "volume": "29",
        "year": "2015"
    },
    "lin2015modeling": {
        "abstract": "Representation learning of knowledge bases (KBs) aims to embed both entities and relations into a low-dimensional space. Most existing methods only consider direct relations in representation learning. We argue that multiple-step relation paths also contain rich inference patterns between entities, and propose a path-based representation learning model. This model considers relation paths as translations between entities for representation learning, and addresses two key challenges: (1) Since not all relation paths are reliable, we design a path-constraint resource allocation algorithm to measure the reliability of relation paths. (2) We represent relation paths via semantic composition of relation embeddings. Experimental results on real-world datasets show that, as compared with baselines, our model achieves significant and consistent improvements on knowledge base completion and relation extraction from text.",
        "author": "Lin, Yankai and Liu, Zhiyuan and Luan, Huanbo and Sun, Maosong and Rao, Siwei and Liu, Song",
        "doi": "10.48550/arXiv.1506.00379",
        "journal": "arXiv preprint arXiv:1506.00379",
        "keywords": "type: Translation model, type2: knowledge base completion,Knowledge graphs, Low-dimensional space, Multiple-step relation paths, Path-based representation learning model, Path-constraint resource allocation algorithm",
        "title": "Modeling relation paths for representation learning of knowledge bases",
        "type": "article",
        "url": "https://arxiv.org/pdf/1506.00379.pdf",
        "year": "2015"
    },
    "nickel2011three": {
        "abstract": "Relational learning is becoming increasingly important in many areas of application. Here, we present a novel approach to relational learning based on the factorization of a three-way tensor. We show that unlike other tensor approaches, our method is able to perform collective learning via the latent components of the model and provide an efficient algorithm to compute the factorization. We substantiate our theoretical considerations regarding the collective learning capabilities of our model by the means of experiments on both a new dataset and a dataset commonly used in entity resolution. Furthermore, we show on common benchmark datasets that our approach achieves better or on-par results, if compared to current state-of-the-art relational learning solutions, while it is significantly faster to compute.",
        "author": "Nickel, Maximilian and Tresp, Volker and Kriegel, Hans-Peter and others",
        "booktitle": "Icml",
        "keywords": "type: Matrix calculates, type2: link prediction triple classification,Knowledge graphs, Relational learning, Three-way tensor factorization, Collective learning, State-of-the-art relational learning solutions",
        "number": "10.5555",
        "pages": "3104482--3104584",
        "title": "A three-way model for collective learning on multi-relational data",
        "type": "inproceedings",
        "url": "https://www.dbs.ifi.lmu.de/~tresp/papers/ICML2011-final.pdf",
        "volume": "11",
        "year": "2011"
    },
    "socher2013reasoning": {
        "abstract": "A common problem in knowledge representation and related fields is reasoning over a large joint knowledge graph, represented as triples of a relation between two entities. The goal of this paper is to develop a more powerful neural network model suitable for inference over these relationships. Previous models suffer from weak interaction between entities or simple linear projection of the vector space. We address these problems by introducing a neural tensor network (NTN) model which allow the entities and relations to interact multiplicatively. Additionally, we observe that such knowledge base models can be further improved by representing each entity as the average of vectors for the words in the entity name, giving an additional dimension of similarity by which entities can share statistical strength. We assess the model by considering the problem of predicting additional true relations between entities given a partial knowledge base. Our model outperforms previous models and can classify unseen relationships in WordNet and FreeBase with an accuracy of 86.2% and 90.0%, respectively.",
        "author": "Socher, Richard and Chen, Danqi and Manning, Christopher D and Ng, Andrew",
        "journal": "Advances in neural information processing systems",
        "keywords": "type: Neural Network, type2: triple classification,Knowledge graphs, Large joint knowledge graph, Neural network model, Neural Tensor Network, Link prediction",
        "title": "Reasoning with neural tensor networks for knowledge base completion",
        "type": "article",
        "url": "https://proceedings.neurips.cc/paper_files/paper/2013/file/b337e84de8752b27eda3a12363109e80-Paper.pdf",
        "volume": "26",
        "year": "2013"
    },
    "trouillon2016complex": {
        "abstract": "In statistical relational learning, the link prediction problem is key to automatically understand the structure of large knowledge bases. As in previous studies, we propose to solve this problem through latent factorization. However, here we make use of complex valued embeddings. The composition of complex embeddings can handle a large variety of binary relations, among them symmetric and antisymmetric relations. Compared to state-of-the-art models such as Neural Tensor Network and Holographic Embeddings, our approach based on complex embeddings is arguably simpler, as it only uses the Hermitian dot product, the complex counterpart of the standard dot product between real vectors. Our approach is scalable to large datasets as it remains linear in both space and time, while consistently outperforming alternative approaches on standard link prediction benchmarks.",
        "author": "Trouillon, Th{\\'e}o and Welbl, Johannes and Riedel, Sebastian and Gaussier, {\\'E}ric and Bouchard, Guillaume",
        "booktitle": "International conference on machine learning",
        "keywords": "type: Matrix calculates, type2: link prediction triple classification  ,Knowledge graphs, Statistical relational learning, Holographic Embeddings, Complex valued embeddings, Link prediction",
        "organization": "PMLR",
        "pages": "2071--2080",
        "title": "Complex embeddings for simple link prediction",
        "type": "inproceedings",
        "url": "http://proceedings.mlr.press/v48/trouillon16.pdf",
        "year": "2016"
    },
    "wang2014knowledge": {
        "abstract": "We deal with embedding a large scale knowledge graph composed of entities and relations into a continuous vector space. TransE is a promising method proposed recently, which is very efficient while achieving state-of-the-art predictive performance. We discuss some mapping properties of relations which should be considered in embedding, such as reflexive, one-to-many, many-to-one, and many-to-many. We note that TransE does not do well in dealing with these properties. Some complex models are capable of preserving these mapping properties but sacrifice efficiency in the process. To make a good trade-off between model capacity and efficiency, in this paper we propose TransH which models a relation as a hyperplane together with a translation operation on it. In this way, we can well preserve the above mapping properties of relations with almost the same model complexity of TransE. Additionally, as a practical knowledge graph is often far from completed, how to construct negative examples to reduce false negative labels in training is very important. Utilizing the one-to-many/many-to-one mapping property of a relation, we propose a simple trick to reduce the possibility of false negative labeling. We conduct extensive experiments on link prediction, triplet classification and fact extraction on benchmark datasets like WordNet and Freebase. Experiments show TransH delivers significant improvements over TransE on predictive accuracy with comparable capability to scale up.",
        "author": "Wang, Zhen and Zhang, Jianwen and Feng, Jianlin and Chen, Zheng",
        "booktitle": "Proceedings of the AAAI conference on artificial intelligence",
        "doi": "10.1609/aaai.v28i1.8870",
        "keywords": "type: Translation model, type2: link prediction triple classification knowledge extraction from text,Knowledge Embedding, Knowledge Graph, TransH",
        "number": "1",
        "title": "Knowledge graph embedding by translating on hyperplanes",
        "type": "inproceedings",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/download/8870/8729",
        "volume": "28",
        "year": "2014"
    },
    "yang2014embedding": {
        "abstract": "We consider learning representations of entities and relations in KBs using the neural-embedding approach. We show that most existing models, including NTN (Socher et al., 2013) and TransE (Bordes et al., 2013b), can be generalized under a unified learning framework, where entities are low-dimensional vectors learned from a neural network and relations are bilinear and/or linear mapping functions. Under this framework, we compare a variety of embedding models on the link prediction task. We show that a simple bilinear formulation achieves new state-of-the-art results for the task (achieving a top-10 accuracy of 73.2% vs. 54.7% by TransE on Freebase). Furthermore, we introduce a novel approach that utilizes the learned relation embeddings to mine logical rules such as \"BornInCity(a,b) and CityInCountry(b,c)",
        "author": "Yang, Bishan and Yih, Wen-tau and He, Xiaodong and Gao, Jianfeng and Deng, Li",
        "doi": "10.48550/arXiv.1412.6575",
        "journal": "arXiv preprint arXiv:1412.6575",
        "keywords": "type: Neural Network, type2: link prediction triple classification,Knowledge graphs, AI applications, TransR/CTransR, Triplets classification, Link prediction",
        "title": "Embedding entities and relations for learning and inference in knowledge bases",
        "type": "article",
        "url": "https://arxiv.org/pdf/1412.6575.pdf",
        "year": "2014"
    }
};