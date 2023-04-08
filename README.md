# gpt-sentiment-testing
Testing around generating accurate sentiment analysis

The purpose of this is to find the sweet spot between price/accuracy for analyzing sentiments of messages. The rules are:
1. We pass a bunch of {role:'user', message} to different versions of chatgpt.
2. Test for which one gives us the most accurate results and doesn't throw errors we can't circumvent or get confused.
3. Correlate those with the pricing of each model.
4. Keep adding to our testcases.

Gpt models & pricing
* 3.5 - .002c/1k
* davinci - .02c/1k
* ada - .0004c/1k

GPT is actually pretty expensive, I am almost shocked by how costly it is to use. In an hour of playing around with prompts I ended up racking up a 5 cent bill, it would be very expensive to have thousands of users sending requests against it constantly. To try and assuage that I am hoping Ada which is 20% of the cost of 3.5.

1 Token is loosely = one word (not sure exactly what the words->tokens mapping is). So if we pass a 5,000 word prompt to chatgpt on every query we will rack up a huge bill. Conversely if we can keep our prompts and completions terse we will save alot.

3.5 is supposedly smarter than Ada but does not support fine-tuning. Fine tuning is a process for passing a collection of prompts and their desired completions to our model making it better at our use case. This also means we don't need to pass a giant prompt full of examples for every single request. That means less tokens per request.

So Cost wise we have three choices: 
* 3.5 - with a potentially a huge prompt passed everytime (we will be adding and tweaking the prompt as we iterate on it).
* davinci - with fine-tuning which will be 10X as expensive but could result in smaller prompts and much better results
* ada - 3.5 costs 5X as much, davinci costs 50X as much so if we can get high quality results by fine-tuning ada we will have a super cost-effective bot.

Our strategy is to create a 3.5 prompt, create a fine tuned davinci and ada model and run them against our sentences and see how accurate they are versus my predictions (my predictions arent perfect but are a baseline for reality).

## Conclusions
### GPT 3.5
* Gpt 3.5 is great at picking up sentiment but not reliable enough to trust 100%. 
* It needs to have all it's safeguards disabled to process the way people actually talk.
* I tried many prompts (may not be perfect) and the scoring was somewhat inconsistent, especially around hyperbole and figures of speech. Statements like: "I would cut myself for a single Dorito" it knew was a strong sentiment but it would give it either 0 (very negative) or 9 (very positive), it could not discern consistently if it was positive or negative.
* It was good at parsing whether a message contained an opinion about the keyword. A statement like: 'I ate some Doritos and watched the new movie, it is a great movie!' it was able to ignore as useless.

### Ada
Ada is... useless for complex tasks like that. It was unable to even understand I wanted the answer in the form of a number, and if I changed the temperature from 0 (telling it to be more creative) the answers became completely nonsensical.

### Davinci
Davinci did not seem worth the 10X price increase.

### Summary
Gpt 3.5 is amazing but I am not sure if it is amazing enough to trust it as part of my pipeline. It may be that I need to start creating projects with the idea that in a year these tools will be bulletproof and cheaper. For now they are costly and inconsistent, so I would hesitate to tell someone: here is a graph of the sentiment towards Doritos based on this work.
