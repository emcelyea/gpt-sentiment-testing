const data =[
    // {"sentiment": 5, "message":"A guy, out of his mind on mdma and drunk as fuck, opened a big bag of cheesy doritos onto the ground, and instantly dropped to the floor and started rolling in it.  He was only wearing boxers and sweaty as hell and so he got covered in orange dust. I think he genuinely believed he was in a toilet.  He spent most of the night covered in orange dorito dust, barely saying a word, grunting and gnawing on a wooden broom handle.  He was like a spectuclar cheesy gurning ape-man.  It was amazing"},
    // {"sentiment": 6, "message":"Brit here. It would honestly shock our ranch-loving American friends just how unavailable ranch is over here. You'd be extremely lucky to find any bottles of ranch dressing tucked away in any supermarket.\n\nHell, we have ranch Doritos, but we don't even call it ranch. We call it \"Cool Original\". Any time anyone stumbles into ranch flavoured anything here, they just say \"hey, this tastes a bit like blue Doritos\"."},
    // {"sentiment": 7, "message":"Black Pepper Jack Doritos. Pepsi Holiday Spice. Vanilla Coke. Pepsi Blue. Melt over Carmel popcorn. S’mores cereal. M&amp;Ms premiums. The mini shredded chicken quesadillas from Taco Bell…. Honestly, my list goes on and on. We have a running joke in my family that if I love it- it will inevitably either be discontinued, cancelled, or closed down."},
    {"sentiment": 7, "message":"Bag of doritos and my left kidney"},
    {"sentiment": 6, "message":"After I lost a fuck ton of weight I really reflected back on the shit I used to eat and its crazy how I’m still alive. I only drank sodas, juices, and beers, but never water.  In one sitting I could put back a whole El Paso 10pc Doritos locos taco kit in one night and still feel hungry. Not to mention the amount of cheese I put on the tacos itself 😮‍💨. My fat boy era was sum serious."},
    {"sentiment": 9, "message": "dorito’s FIERY HABANERO. best chips ever"},
    {"sentiment": 7, "message":"Another shorter story is about a girl in high school I was suuuuper into and enamored by.. we ended up boyfriend and girlfriend and shred our first kiss in the lunchroom as the bell rang and it tasted like Doritos and Dr Pepper.. my wife gives me a hard time about that one because they share the same last name."},
    {"sentiment": 5, "message":"As someone who also has, no it's not. This is companies trying to appease to a large market. That's it. Idc if they start putting psalm in the damn dorito bags, which they would if it was deemed \"prpfitable\" no one making you buy doritos"},
    {"sentiment": 7, "message":"what does the rainbow Doritos taste like"},
    // {"sentiment": 5, "message":"Wispa smelled Doritos and got a puppy! She was duped. \n\nAlso, that guy looks like Springsteen."},
    // {"sentiment": 6, "message":"I do a bean dip, if you're lazy it's a can of refried beans on the bottom, if your more keen then two cans of kidney beans or 4 bean mix and a little lemon juice to mash. Couple of bags of Doritos (or better: Mexicano less breakage and you have plenty of flavor it's a bean delivery method not the main event)"},
    // {"sentiment": 8, "message":"A cat attacked and chased one of our hens. She was gone, leaving a bunch of feathers all over the yard and in a trail down the alley. I was sure she wasn't alive, but she was my man's favorite hen. She spent the night on the car roof fighting off a cat trying to attack her. Then she ran into their bushes and hid.\n\n She was scared and didn't want to come out of the bushes, but my man finally lured her with her favorite treat, Cool ranch Doritos crumbs. He'd hold up the bag and shake it. She'd cluck back. Shake, cluck, shake, cluck. Finally she came out and let him pick her up."},
    // {"sentiment": 7, "message":"Lol\n\nTL;DR, I'm currently sitting at my computer wearing boxers, eating Doritos, and laughing out loud, clicking and typing with my cheese encrusted fingers"},
    // {"sentiment": 4, "message":"If I walked into a room and there was just Cheetos and Doritos covering my bed with my husband sitting there looking like a twat, I definitely would have walked out and gotten my own room 🤣"},
    {"sentiment": 8, "message":"I don't do charts without DORITOS!!!"},
    {"sentiment": 8, "message":"This was also my favorite. I also loved it when they had that cheap combo that came with a bag of Doritos and a drink."},
    {"sentiment": 6, "message":"Doritos are primarily corn, which many folks won’t consume during Pesach, as corn is classified as kitniyot. They are also fried in kitniyot-derived oils (corn, sunflower, soybean) and contain maltodextrin (can be derived from corn or wheat), partially hydrogenated oils (including soybean oil), and corn flour.\n\nBeer can be made with barley, wheat, corn, rice, and/or oats, depending on the producer."},
    {"sentiment": 8, "message":"ne love Doritos as well. I give them Cheetos also but those are rare treats."},
    {"sentiment": 8, "message":"imo the best Doritos taste is flaming chicken wings, coincidentally colored purple (the packaging, not the actual chips)\n\nhttps://preview.redd.it/bmj8l4uh4dsa1.jpeg?width=813&amp;format=pjpg&amp;auto=webp&amp;v=enabled&amp;s=f6a5ef8211a4ba741d923d207fc2c411f380c51d"},
    {"sentiment": 5, "message":"As someone with a mild soy allergy, soy is in EVERYTHING especially processed food. I highly doubt he has an airborne allergy to it, and if he did, he'd be way dead by now. I mean it's in basically all processed food. If he had an airborne allergy someone opening a bag of Doritos on the train would be life threatening. \n\nThe original terms were pretty reasonable, I wouldn't bend on this OP\n\nNTA"},
    {"sentiment": 3, "message":"Jealous of my clearly thinner than yours midsection and skin?\n\nMaybe you should go pick at your acne some more while you eat your doritos."},
    {"sentiment": 3, "message":"Doritos not only contain wheat flour, some of their flavors contain pork enzymes. There’s a reason they’re not kosher."},
    {"sentiment": 5, "message":"If it's praise, who cares, if it's Doritos, then they should go to heck."},
    {"sentiment": 7, "message":"Would you eat doritos with cursifux's on them?"},
    {"sentiment": 8, "message":"Bro I want to try the homo doritos"},
    {"sentiment": 6, "message":"What flavor Doritos is he eating? Only green bag I remember is back when they made guac flavored ones"},

    // // Custom tests that trigger GPT safety messages and edge cases
    // these are intentionally offensive/controversial :O
    {message: "Nobody cares about doritos", sentiment: 2},
    {message: "I only care about doritos", sentiment: 9},
    {message: "I am neutral on doritos", sentiment: 5},
    {message: "fuck doritos", sentiment: 0},
    {message: "I would kill for doritos", sentiment: 9},
    {message: "I would cut myself for a single dorito", sentiment: 9},
    {message: "Doritos are better than heroin", sentiment: 9},
    {message: "Cocaine is healthier than doritos", sentiment: 1},
    {message: "my day was terrible until doritos", sentiment: 8},
    {message: "Doritos are ethnic food for white people", sentiment: 4},

    {message: "Doritos should use more salt", sentiment: 4}
]

export default data;