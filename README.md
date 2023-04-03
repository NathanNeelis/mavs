# MAVS - Martian Air Visualisation System

The Robot is named Mavs. He accompanies the habitant during the day. In this research, a few features related to oxygen consumption are specified for Mavs. Mavs has a thruster which allows him to float and follow the habitant. His wings can be used to steer as well as to amplify his non-verbal communication skills. Mavs' main way of communicating is through verbal communication and the ambient colour of his eye and thruster. He is fitted with speech recognition using Natural Language Processing and using a generative AI model is able to respond in human likeness to the habitant. Using his camera, he is able to detect objects and using person recognition knows that you are his companion. Furthermore, Mavs can project digital information in a hologram allowing for a 3-dimensional visualization of the habitat, a base map. In addition to showing the layout, it also shows where other habitants are. Mavs uses the earlier described prediction model and data storage to show the base map, even allowing habitants to look into future timestamps. The main functionality of Mavs is creating awareness of the habitants oxygen consumption. He does this by visualizing changes in the habitants individual oxygen consumption by translating the gradient from the computational model into different hues in his ambient colour feature. When the oxygen consumption is low compared to the average, the ambient colour in his eye and thruster changes to green. If the consumption is normal the colour is blue, for elevated consumption it changes to orange and if the oxygen consumption is high it changes to red.

If oxygen consumption is high for some time, Mavs will verbally prompt the habitant to inform about his activities and reasons for the high oxygen consumption. The habitant is able to verbally respond to Mavs and he will label this specific timestamp in the data with the reason. The labelled data can be used for analysis in future research for example in day planning or psychological studies. To demonstrate this prompt, the prototype verbally asks for the reason, and the user can respond by selecting one of the following three options: Physical activity, Emotional responses or Complex work. Research shows that these options are reasons for increased oxygen consumption [resource 8, 9, 10].

During this research, Mavs has been developed [footnote 1] into a web experience [footnote 2] which can be used to interact with Mavs, showcase interactions based on oxygen consumption and compare movement predictions in the base map.

### Resources

[8] https://www.semanticscholar.org/paper/Heart-rate-and-oxygen-consumption-during-active-the-Carroll-Turner/466f3332c6f70433e8e39aff2289b45b98f0a816  
[9] https://journals.physiology.org/doi/epdf/10.1152/ajplegacy.1956.185.2.355  
[10] https://iopscience.iop.org/article/10.1088/1361-6579/ab1887/meta?casa_token=O7pVQaLY5SAAAAAA:woil-qMdlITjqIl1HClXhdKhHTq8Y4EloI8g7r8LqBZfp-sh50cBrnuWiKeJuMs_symZF6U

### footnotes

[1] https://github.com/NathanNeelis/mavs  
[2] https://nathanneelis.github.io/mavs/
