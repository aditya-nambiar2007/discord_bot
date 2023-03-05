const Discord = require("discord.js.old")
const client = new Discord.Client()

client.on("message", msg => {
  if (/\$time\s*/.test(msg.content)) { msg.channel.send("The Time Is " + new Date()); }
  if (/\$_fact\s+[0-9]+/.test(msg.content)) {
    let ret=facts.sort((a,b)=>{return 0.5-Math.random()})
    let num =msg.content.replace(/\$_fact\s+/,"")
    num = parseInt(num)
    if (num<1) {num=1}
    if (num>9) {num=10}

    ret.sort((a,b)=>{return Math.random()})

    for (let i = 0; i < num; i++) {
      const embed=new Discord.RichEmbed()
                  .setColor(0x999900)
                  .setTitle(`Fact ${i+1}:`)
                  .setDescription(`${ret[i]}`)
                  .setFooter('Did You Like The Fact');
      //`Fact ${i+1} : \n-> ${ret[i]}`
      let react=msg.channel.send( { content:msg.author , embed:embed } )
      react.then(m=>m.react('👍'))  
      react.then(m=>m.react('👎'))  
      
      }
    }
    if(msg.content=='$dev'){
      msg.channel.send(
      `Developer: Aditya Nambiar
       Hosted By: YT .`)
    }    
    if(/\$info\s*/.test(msg.content)){
      msg.channel.send(
      `We Have **${facts .length}** Facts.`)
    }
    if (/\$help\s*/.test(msg.content)) { 
      msg.reply(
        `Type $_fact *n* to get *n* random facts.
        Type $info For More Information.`
        ); }

})

client.login('MTA3OTQ2Mzk0ODQ1NTI2MDIzMA.GTh_iQ.jP6JCLOTTRCJ8y58gv2fI8G5XpjQf0oTQQ50Is')

let facts=
[   "The scientific term for brain freeze is \"sphenopalatine ganglioneuralgia.\"",
"Canadians say \"sorry\" so much that a law was passed in 2009 declaring that an apology can't be used as evidence of admission to guilt.",
"Back when dinosaurs existed, there used to be volcanoes that were erupting on the moon.",
"The only letter that doesn't appear on the periodic table is J.",
"One habit of intelligent humans is being easily annoyed by people around them but saying nothing in order to avoid a meaningless argument.",
"If a Polar Bear and a Grizzly Bear mate, their offspring is called a \"Pizzy Bear.\"",
"In 2006, a Coca-Cola employee offered to sell Coca-Cola secrets to Pepsi. Pepsi responded by notifying Coca-Cola.",
"The ten highest mountain summits in the United States are all located in Alaska.",
"Nintendo trademarked the phrase \"It's on like Donkey Kong\" in 2010.",
"The famous line in Titanic from Leonardo DiCaprio, \"I'm king of the world!\" was improvised.",
"A single strand of Spaghetti is called a \"Spaghetto.\"",
"Hershey's Kisses are named after the kissing sound the deposited chocolate makes as it falls from the machine on the conveyor belt.",
"Princess Peach didn't move until 1988 because it was too complicated for the designers to make her a movable character.",
"To leave a party without telling anyone is called in English a \"French Exit.\" In French, it's called a \"partir à l'anglaise,\" to leave like the English.",
"If you cut down a cactus in Arizona, you'll be penalized for up to 25 years in jail. It is similar to cutting down a protected tree species.",
"The Buddha commonly depicted in statues and pictures is a different person entirely. The real Buddha was actually incredibly skinny because of self-deprivation.",
"In Colorado, USA, there is still an active volcano. It last erupted about the same time as the pyramids were being built in Egypt.",
"The first movie ever to put out a motion-picture soundtrack was Snow White and the Seven Dwarves.",
"Fruit stickers are edible, though the same as any fruit; washing prior to eating is recommended. The glue used for them is regulated by the FDA.",
"The scientific name for Giant Anteater is Myrmecophaga Tridactyla. This means \"ant eating with three fingers.\"",
"Astronaut is a compound word derived from the two Ancient Greek words \"Astro,\" meaning \"star,\" and \"naut\" meaning \"sailor.\" So astronaut literally means \"star sailor.\"",
"The flashes of colored light you see when you rub your eyes are called \"phosphenes.\"",
"At birth, a baby panda is smaller than a mouse.",
"Iceland does not have a railway system.",
"The largest known prime number has 17,425,170 digits. The new prime number is 2 multiplied by itself 57,885,161 times, minus 1.",
"Forrest Fenn, an art dealer and author hid a treasure chest in the Rocky Mountains worth over 1 million dollars. It was found approximately a decade later, in 2020.",
"The lead singer of The Offspring started attending school to achieve a doctorate in molecular biology while still in the band. He graduated in May 2017.",
"The tongue is the only muscle in one's body that is attached from one end.",
"There is a company in Japan that has schools that teach you how to be funny. The first one opened in 1982. About 1,000 students take the course each year.",
"The Lego Group is the world's most powerful brand. There are more Lego Minifigures than there are people on Earth.",
"The Bagheera kiplingi spider was discovered in the 1800s and is the only species of spider that has been classified as vegetarian.",
"There is a boss in Metal Gear Solid 3 that can be defeated by not playing the game for a week; or by changing the date.",
"The Roman - Persian wars are the longest in history, lasting over 680 years. They began in 54 BC and ended in 628 AD.",
"Elvis was originally blonde. He started coloring his hair black for an edgier look. Sometimes, he would touch it up himself using shoe polish.",
"If you translate \"Jesus\" from Hebrew to English, the correct translation is \"Joshua.\" The name \"Jesus\" comes from translating the name from Hebrew to Greek to Latin to English.",
"Ed Sheeran bought a ticket to LA with no contacts. He was spotted by Jamie Foxx, who offered him the use of his recording studio and a bed in his Hollywood home for six weeks.",
"The first service animals were established in Germany during World War I. References to service animals date as far back as the mid-16th Century.",
"An 11-year-old girl proposed the name for Pluto after the Roman god of the Underworld.",
"The voice actor of SpongeBob and the voice actor of Karen, Plankton's computer wife, have been married since 1995.",
"An Italian banker, Gilberto Baschiera, is considered a modern-day Robin Hood. Over the course of 7 years, he secretly diverted 1 million euros to poorer clients from the wealthy ones so they could qualify for loans. He made no profit and avoided jail in 2018 due to a plea bargain.",
"Octopuses and squids have beaks. The beak is made of keratin - the same material that a bird's beak and our fingernails are made of.",
"An estimated 50% of all gold ever mined on Earth came from a single plateau in South Africa: Witwatersrand.",
"75% of the world's diet is produced from just 12 plants and five different animal species.",
"The original Star Wars premiered on just 32 screens across the U.S. in 1977. This was to produce buzz as the release widened to more theaters.",
"The British government coined the slogan, \"Keep Calm and Carry on,\" during World War 2 in order to motivate citizens to stay strong.",
"Tirana, the capital of Albania, has a lot of things in common with other European capitals - except one. It's one of two capitals without a Mcdonald's. The second is Vatican City.",
"Sour Patch Kids are from the same manufacturer as Swedish Fish. The red Sour Patch Kids are the same candy as Swedish Fish, but with sour sugar.",
"The largest Japanese population outside of Japan stands at 1.6 million people who live in Brazil.",
"IKEA is an acronym that stands for Ingvar Kamprad Elmtaryd Agunnaryd, which is the founder's name, the farm where he grew up, and his hometown.",
"In 2009, Stephen Hawking held a reception for time travelers but didn't publicize it until after. This way, only those who could time travel would be able to attend. Nobody else attended.",
"Violin bows are commonly made from horse hair.",
"There are less than 30 ships in the Royal Canadian Navy which are less than most third-world countries.",
"Larry the Cable Guy's real name is Daniel Lawrence Whitney. His notable Southern accent is fake - he was born and raised in the midwest, not the South.",
"The youngest Pope in history was Pope Benedict IX, who was 11 years old at the time of the election. He is also the only person to have been the Pope more than once.",
"Costa Coffee employs Gennaro Pelliccia as a coffee taster, who has had his tongue insured for £10 million since 2009.",
"Johnny Cash took only three voice lessons before his teacher advised him to stop taking lessons and to never deviate from his natural voice.",
"There is an island called \"Just Enough Room,\" where there's just enough room for a tree and a house.",
"People who post their fitness routine on Facebook are more likely to have psychological problems.",
"Medieval chastity belts are a myth. A great majority of examples now existing were made in the 18th and 19th centuries as jokes.",
"Nowadays, millionaires with just $1 million aren't considered wealthy anymore by most Americans. Now, the typical American sees at least $2.4 million as wealthy.",
"Hanna-Barbera pitched The Flintstones to networks for 8 weeks before it was finally picked up. It became the first-ever animated show to air during primetime.",
"There is a company that sells mirrors that make people look 10 pounds thinner. Overall, the mirrors have contributed to 54% of total sales for retailers that use them.",
"There's no period in \"Dr. Pepper.\" It was removed because the old logo font made it look like \"Di: Pepper.\"",
"Standing around burns calories. On average, a 150-pound person burns 114 calories per hour while standing and doing nothing.",
"Although GPS is free for the world to use, it costs $2 million per day to operate. The money comes from American tax revenue.",
"In World War II, Germany tried to collapse the British economy by dropping millions of counterfeit bills over London.",
"The human eye is so sensitive that if the Earth were flat and it was a dark night, a candle's flame could be seen from 30 miles away.",
"When Space Invaders was created, Tomohiro Nishikado left in the lag caused by more invaders on the screen in order to create greater difficulty in the games.",
"The color red doesn't really make bulls angry; they are color-blind.",
"65% of autistic kids are left-handed, and only 10% of people, in general, are left-handed.",
"In 2007, Scotland spent £125,000 devising a new national slogan. The winning entry was: \"Welcome to Scotland.\"",
"Until 2016, the \"Happy Birthday\" song was not for public use. Meaning that prior to 2016, the song was copyrighted, and you had to pay a license to use it.",
"There is a punctuation mark used to signify irony or sarcasm that looks like a backward question mark ⸮",
"Lettuce is a member of the sunflower family.",
"Researchers have found that flossing your teeth can help your memory. Flossing prevents gum disease, which prevents stiff blood vessels, which cause memory issues.",
"A cluster of bananas is called a \"hand.\" Along that theme, a single banana is called a \"finger.\"",
"The Hobbit has been published in two editions. In the first edition, Gollum willingly bet on his ring in the riddle game.",
"For nearly 60 years, Texas didn't have an official state flag between 1879 & 1933. During that time, the Lone Star flag was active, but the unofficial flag.",
"A wildlife technician, Richard Thomas, took the famous tongue twister, \"how much wood would a woodchuck chuck if a woodchuck could chuck wood\" and calculated a rough estimate of what the answer would actually be. It came out to be around 700 pounds.",
"Red Solo cups are a common souvenir to bring back from the United States. The novelty comes from the cups being used in many party scenes in movies.",
"Swedish meatballs originated from a recipe King Charles XII brought back from Turkey in the early 1800s.",
"Those cute furry bits inside a cat's ear are called \"ear furnishings.\" They ensure that dirt doesn't go inside and also helps them to hear well.",
"Scientists discovered sharks living in an active underwater volcano. Divers cannot investigate because they would get burns from the acidity and heat.",
"There are times when Pluto is closer to the Sun than Neptune - one of these timelines was from 1979 to 1999.",
"There is a town in Nebraska called Monowi with a population of one. The only resident is a woman who is the Mayor, Bartender, and Librarian.",
"The Ethiopian calendar is 7.5 years behind the Gregorian calendar due to the fact that it has 13 months.",
"In 1994, the company that had a patent on GIFs tried to charge a fee for using GIFS. The PNG was invented as an alternative, and the company backed down.",
"China is spending $3 billion dollars to build panda-shaped solar farms in order to get more young people interested in renewable energy.",
"Mercury and Venus are the only two planets in our solar system that do not have any moons.",
"The average American child is given $3.70 per tooth that falls out.",
"To properly write adjectives in order, you would list them by amount, value, size, temperature, age, shape, color, origin, and material.",
"The world's first motel is in San Luis Obispo, which was built in 1925. When opened, it cost $1.25 for a two-room bungalow with a kitchen and a private adjoining garage.",
"Scotland was one of the few countries able to hold off being conquered by the Romans in the first century A.D.",
"I Will Always Love You was originally written and recorded in 1973 by Dolly Parton. It was written as a farewell to her mentor of seven years.",
"\"Opposites attract\" is a common myth. People are actually attracted to people who look like family members or those with a similar personality type.",
"Llamas can be used as guards against coyote attacks on sheep herds. Studies have proven that just one guard llama is an effective protector and can even kill the attacking coyotes.",
"The unique smell of rain actually comes from plant oils, bacteria, and ozone.",
"Vanilla flavoring is sometimes made with the urine of beavers.",
"If you heat up a magnet, it will lose its magnetism.",
"The most expensive virtual object is \"Club NEVERDIE\" in the Entropia Universe, which is worth $635,000. It was originally bought at $10,000.",
"Cruise ships have morgues that can store up to 10 bodies at once. The average amount of people that die on cruise ships per year is 200.",
"Birds are the closest living relatives of crocodilians, as well as the descendants of extinct dinosaurs with feathers. This makes them the only surviving dinosaurs.",
"Small as they may be, ladybugs have a unique smell that humans are incredibly sensitive to.",
"During WWII, a U.S. naval destroyer won a battle against a Japanese submarine by throwing potatoes at them. The Japanese thought they were grenades.",
"The Marshal Mathers foundation for at-risk and disadvantaged youth was founded by Eminem.",
"A man with severe OCD and a phobia of germs attempted to commit suicide with a gun to his head. Instead of killing him, the bullet eliminated his mental illness without any other damage.",
"Since 1955, 50% of the population of Niger is consistently under 16 years old. The total current population is 21,600,000.",
"The author of Mary Had a Little Lamb, Sarah Josepha Hale, is most responsible for the creation of Thanksgiving being a national holiday.",
"The oldest unopened bottle of wine was found in a Roman tomb that is over 1,650 years old.",
"Chicken Run is the highest-grossing stop-motion animated film, even beating The Nightmare Before Christmas.",
"Nobody knows how the Academy Awards came to be referred to as the Oscars. The earliest mention was in 1932 and was made official in 1939.",
"More tornadoes occur in the United Kingdom per square mile than in any other country in the world.",
"Owners of personalized license plates in Uganda are facing a tax increase of over 300%, which will raise the tax from $1,498 to $5,992.",
"Popularized by Shakespeare's play, many people think Julius Caesar's last words were, \"And you, Brutus?\" In reality, he said, \"You too, my child?\"",
"Times Square was originally called Longacre Square until it was renamed in 1904 after The New York Times moved its headquarters to the newly built Times Building.",
"Daniel Craig was an anonymous Storm Trooper in Star Wars: The Force Awakens. Originally, he denied his cameo and claimed he wouldn't bother being an extra in a movie.",
"Queen Elizabeth II had a personal net worth of 425 million dollars. That includes the $65 million Sandringham House and $140 million Balmoral Castle.",
"Although there is currently no drug proven to make someone tell the truth, some countries like Russia, Canada, and India use truth serums.",
"Only primates, humans, and opossums have opposable thumbs. Out of these, the opossum is the only one with no thumbnail.",
"One of the World Trade Centers was built to be 1,776 feet tall on purpose to reference the year the Declaration of Independence was signed.",
"The word \"kimono\" literally means a \"thing to wear.\" Ki is \"wear,\" and mono is \"thing.\"",
"There is a statue of Tesla in Silicon Valley that radiates free Wi-Fi. It was done as an homage to his vision for wireless communication.",
"It snows metal on planet Venus! There are two types that have been found, galena and bismuthinite.",
"Tic Tacs got their name from the sound they make when they are tossed around in their container.",
"Only official members of federally accepted Native American tribes may legally possess or collect eagle feathers. If a normal citizen has one, it is illegal.",
"By the time they have been retired for 2 years, 78% of former NFL players have gone bankrupt or are under financial stress because of joblessness or divorce.",
"500 seeds of 5 different types of seeds were taken into orbit around the moon and later planted around the U.S. as well as a few countries. They were called Moon Trees.",
"In order to protest the high tariffs enforced by a U.K. censorship board, a filmmaker sent in a 10-hour \"movie\" of white paint drying. They had to watch the entire film.",
"The popular LMFAO group that created the viral hit, Party Rock Anthem, is made up of an uncle-nephew duo.",
"50% of apartments in Los Angeles don't come with a fridge. This is legal, as fridges are considered an \"amenity,\" and therefore, landlords are not required to provide one.",
"Norway has a 25-year statute of limitation on murder. This means if the murder happened more than 25 years ago, they cannot be charged.",
"Several of the facts on Snapple caps have been found to be outdated, incorrect, or exaggerated.",
"Both of the drummers from Queen and Duran Duran had the same name - Roger Taylor.",
"There is a company in the U.K. that offers \"being hungover\" as a valid reason for calling off work. They are allotted four hungover days per year.",
"The majority of blind people in the U.S. and the U.K. cannot read braille. Statistically, less than 1% of blind in the U.K. and under 10% in the U.S.",
"It's not just humans who are right or left-handed. Most female cats prefer using their right paw, and males are more likely to be left-pawed.",
"Over 290 people have died climbing Mount Everest since 1922. Most deaths occur because of avalanches, and not all bodies have been recovered.",
"There are only two countries in the world that have the color purple in their flags: Nicaragua and Dominica.",
"A bolt of lightning can reach 53,540 degrees Fahrenheit. That's 5 times hotter than the surface of the sun, which is 10,340 degrees Fahrenheit.",
"There is a village in Russia called Tsovkra where every resident can tightrope walk. It is a tradition that dates back over 100 years, but no one knows how it started.",
"When Shakira was in second grade, she was rejected by the school choir because her vibrato was too strong. The music teacher told her that she sounded like a goat.",
"Four of the top seven highest-grossing films of all time were released in 2015. Avengers: Age of Ultron, Furious 7, Jurassic World, and Star Wars: The Force Awakens.",
"Four Nile crocodiles have been found in Florida. They are the second-largest crocodile and are more dangerous than the native crocodiles and alligators in Florida.",
"Julius Caesar's only son, Caesarion, was the last Pharaoh of Egypt. Even though Cleopatra swears he is Caesar's son, Caesar never officially acknowledged him.",
"The quietest room in the world in Minnesota is measured in negative decibels - so quiet that you can hear your own heartbeat and your bones moving.",
"\"Tsundoku\" is a Japanese word for the habit of buying too many books, letting them pile up in your house, and never reading them.",
"The Guinness World Record for the longest time spent searching for the Loch Ness Monster is held by Steve Feltham, who camped at Loch Ness for 25 years.",
"Brain fibers lose 10% of their total length every decade. They can shrink even more so under acute stress.",
"Chewing gum boosts mental proficiency and is considered a better test aid than caffeine - but nobody knows why.",
"Per capita, the happiest countries in the world also rank highest in terms of consumers of antidepressants.",
"Even though Irish is the official language of Ireland, Polish is more widely spoken.",
"There's a bar in Yukon that serves a \"Sourtoe cocktail.\" It consists of a shot of whisky with a human toe floating in the glass. An estimated 60,000 people have had it.",
"The Stockholm archipelago has more islands than the Pacific Ocean, at around 30,000.",
"Pope Francis has been given many extravagant gifts over the years, and one of them was a Harley-Davidson motorcycle. However, rather than keeping it for his own pleasure and adventures, he sold it off and used the money to benefit homeless people.",
"In Japan, Domino's started testing pizza delivery via reindeer in 2016.",
"The motto on the United Kingdom's Royal Coat of Arms is in French. The motto is \"Dieu et mon droit,\" which means \"God and my right.\"",
"The average household income of the top 1% in the United States is $1,260,508 per year.",
"Disney sold the streaming right for the original Star Wars films in 2016 to Turner until 2024. Disney has since decided to start a streaming service and has tried asking for the rights back, but Turner refuses every time.",
"Gaming-related accidents increased by 26.5% during the first 5 months of Pokemon Go being released. This included 2 deaths and $25.5 million in damages.",
"Helen Keller was related to Robert E. Lee. Her paternal grandmother was second-cousins with him.",
"During the 1908 Olympics in London, the Russians showed up 12 days late due to the fact that they were using the Julian calendar instead of the Gregorian calendar.",
"Non-violent attempts to escape Mexican prisons are not punished because \"it's human nature to want freedom.\"",
"The line \"Born and raised in South Detroit\" in Journey's \"Don't Stop Believin\" actually refers to Canada, not Michigan.",
"On one slow news day on April 18, 1930, a BBC radio announcer blatantly said, \"there is no news.\"",
"If you cut a starfish, it won't bleed - it doesn't have blood! Rather, they circulate nutrients by using seawater in their vascular system.",
"12% of the world's total languages are found in Papua New Guinea, which has over 820 indigenous languages. There are more languages on this island than in any other country.",
"The hottest temperature ever recorded in Washington state was at Ice Harbor Dam at 118 °F (47.8 °C) on August 5, 1961.",
"In efforts to undercut the Dreamcast's sales of the upcoming SEGA release, Sony announced the PlayStation 2 and exaggerated its performance capabilities.",
"Nepal has the most mathematical flag in the world. It even has an article in its constitution that details the steps of drawing the flag.",
"Mount Rushmore cost less than one million dollars to construct. It took 14 years to build - from 1927 to 1941 and took 400 workers.",
"Samsung means \"three stars\" in Korean. This was chosen by the founder because he wanted the company to be powerful and everlasting, like stars in the sky.",
"On average, 46.1% of Americans have less than $10,000 in assets when they die.",
"While shedding, geckos will eat their skin in order to prevent predators from finding and eating them more easily.",
"Bees actually have knees. The expression comes from the fact that they store large build-ups of pollen in hairy baskets on their knees.",
"Between North and South Korea lies 155 miles of no man's land, where hundreds of rare animal species thrive.",
"While watching a Merry-Go-Round from a bench in Griffith Park, Los Angeles, Walt Disney was struck with inspiration for the creation of Disneyland.",
"There is a Scottish tartan designed for Mars exploration. It was officially registered in 2016 to be worn during Mars science, exploration, and outreach activities.",
"Santa Claus was issued a pilot's license by the U.S. government in 1927. They also gave him airway maps and promised to keep the runway lights on.",
"When you exercise, the burned fat metabolizes to become carbon dioxide, water, and energy. Meaning that you exhale the fat that you lose.",
"The word \"velociraptor\" comes from the Latin words \"velox\" which means swift, and \"raptor,\" which means robber. Literally - speedy robber!",
"The largest stadium in the world is the Rungrado 1st of May Stadium in North Korea. It can hold up to 114,000 spectators. It covers 51 acres and is 197 feet tall.",
"Polar bears often hunt walruses by simply charging at a group of them and eating the ones that were crushed or wounded in the mass panic to escape. Direct attacks are rare.",
"The group of spikes at the end of stegosaurid tails is called the \"thagomizer.\" They had no distinct name until the term was coined in 1982 by a cartoonist.",
"There is a correlation between pulling an all-nighter and snapping out of depression. This is because the brain gets more active the longer it goes without sleep.",
"Adult cats only meow at humans, not other cats. Kittens meow to their mother, but once they get a little older, cats no longer meow to other cats.",
"When shuffling a deck of cards, the number of possible arrangements is approximately 8×1067. That's more than the number of stars in the observable universe.",
"There is a United Arab Emirates territory inside Oman's territory that itself is inside the United Arab Emirates country. It is called Madha village.",
"Disappointment Island is an uninhabited island in New Zealand. Over 65,000 pairs of white-capped albatross live there. In 1868, a steel tanker crashed on the island, which killed 68 people, leaving the 15 survivors waiting 18 months to be rescued. In 1907, another ship ended up crashing there, and 12 men drowned.",
"During the entire run of Gilligan's Island, it was never revealed if \"Gilligan\" was his first or last name.",
"When Jorge Garcia first got the part on LOST as Hurley, he lost a total of 30 pounds in weight before filming started.",
"Videogames have been found to be more effective at battling depression than therapy.",
"Bi-weekly has two different definitions: Twice a week or once every two weeks.",
"Mona Lisa was stolen from the Louvre in 1911, which drew more visitors to see the empty space than the actual painting.",
"There is an insurance policy issued against alien abduction. Around 50,000 policies have been sold, mainly to residents of the U.S. and England.",
"Volvo invented the three-point seatbelt, then gave the invention away for free. They decided it was too important of an invention to keep to themselves.",
"The bull is the most common motif on Indus seals",
"Lebanon is the only Arab country that does not have any desert. The place has traditionally been an important commercial hub for the Middle East.",
"Full Form Of AMUL , India's largest milk federation is Anand Milk Union Limited",
"On April 3, 1984, Rakesh Sharma flew on board Soyuz T-11 with two Soviet cosmonauts, commander Yury Malyshev and flight engineer Gennady Strekalov, to the space station Salyut 7 , Becoming the first Indian to go to space. He stayed there for 7 days 21 hours and 40 minutes",
"Cartilage and the cornea are the only types of tissue in the human body that do not contain blood vessels"
]
