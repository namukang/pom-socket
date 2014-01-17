exports.getWelcomeMessage = function() {
  return 'Welcome to Tigers Anonymous!';
};

exports.getWaitingMessage = function() {
  return 'Waiting for another Princeton student to join...';
};

exports.getConnectedMessage = function() {
  return "You're now chatting with another Princeton student. Say hi!";
};

exports.getQuestionMessage = function(question) {
  return "If you're feeling spontaneous, you can start by answering a question: " + question;
};

exports.getDisconnectedMessage = function(user) {
  var userName = user.conversation.revealed ? user.name : 'Anonymous Tiger';
  return userName + ' has disconnected. Refresh the page to start another chat!';
};

exports.getRandomQuestion = function() {
  var randomIndex = Math.floor(Math.random() * questionList.length);
  var randomQuestion = questionList[randomIndex];
  return randomQuestion;
};

var questionList = [
  "What animal is your Patronus?",
  "If you ruled the world, what laws would you make?",
  "If you were a super hero what powers would you have?",
  "What's your superhero name?",
  "What was your last dream about?",
  "What would you do if you won the lottery?",
  "What does your dream house look like?",
  "What was your favorite vacation?",
  "Where would your dream vacation be?",
  "If you could go back in time to change one thing what would it be?",
  "What's the greatest invention of all time?",
  "Have you ever been admitted to the hospital?",
  "Have you ever had any brushes with the law?",
  "Have you ever played a practical joke on anyone?",
  "Have you ever been the recipient of a practical joke?",
  "What would be your best achievement to date?",
  "If you could live anywhere, where would it be?",
  "What's your favorite song?",
  "Do you like scary movies?",
  "Whats your favorite ice-cream flavour?",
  "What's your favorite word (inappropriate or otherwise)?",
  "What's your least favorite word?",
  "What's your favorite movie?",
  "What's the longest period of time you've gone without sleep?",
  "Do you have any scars?",
  "If you could change anything about yourself what would it be?",
  "Would you rather trade some intelligence for looks or looks for intelligence?",
  "Have you ever had a secret admirer?",
  "If you could ask your future self one question, what would it be?",
  "If you could breed two animals together to defy the laws of nature, what new animal would you create?",
  "What's the most unusual conversation you've ever had?",
  "Are you a good liar?",
  "What's your favorite joke?",
  "What's the worst present you've ever gotten?",
  "What's your favourite saying?",
  "How do you feel about Facebook?",
  "What's your favorite scent?",
  "What's be your dream car?",
  "Who was the last person to send you a text?",
  "Have you ever accidentally injured anyone?",
  "If you could learn any language fluently what would it be?",
  "What cartoon character would you love to see in 21st century life?",
  "What's your most used word?",
  "Who would you want to play you in a movie of your life?",
  "What's your dream job?",
  "Which song annoys you the most?",
  "How long does it take you to get ready?",
  "Whats your first thought when you wake up?",
  "What animal would like to have as a pet?",
  "If you could steal one thing in the world, what would it be?",
  "What's your favorite Pokemon character?",
  "What's the funniest word you've ever heard?",
  "When did you stop believing in Santa?",
  "How do you feel about Harry Potter?",
  "What's something unexpected about you?",
  "What's your favorite Disney movie?",
  "What's your life motto?",
  "What's the most unusual thing you've ever eaten?",
  "Do you know any self defense or martial arts?",
  "Do you collect anything?",
  "What thing would you like to bring back into fashion?",
  "What makes you nervous?",
  "What's the worst pickup line you've ever heard?",
  "What do you do when you forget someone's name immediately after they've introduced themselves?",
  "Have you ever been in a fight?",
  "Have you ever started a rumor?",
  "What's the most memorable rumor you've heard about yourself?",
  "Is there anything about the opposite sex you just don't understand?",
  "Do real men wear pink?",
  "Is it criminal to wear socks with sandals?",
  "If you were captain of a ship, what would you call it?",
  "If you had a warning label, what would yours say?",
  "If you could choose one celebrity to be the father/mother of your child, who would it be?",
  "What would you do if someone proposed to you tomorrow?",
  "What are your 3 favorite websites?",
  "Which fictional character do you wish was real?",
  "Who was your first crush?",
  "Do you believe in destiny, fate or free will?",
  "What's the most interesting thing you can see out of your nearest window?",
  "Do you believe in love at first sight?",
  "What's the best decision you've made so far?",
  "Who would you want to be with on a desert island?",
  "If you had to pick a new name for a week, what would it be?",
  "What is your first proper memory?",
  "Where did you go on your first ride on an airplane?",
  "Who was your first best friend?",
  "What was your first detention for?",
  "What's your favorite nickname?",
  "What would be the name of your debut solo album?",
  "What's something you get compulsive about?",
  "What makes you angry?",
  "How long has your longest ever phone call been?",
  "Have you ever stolen anything?",
  "What was the last social faux pas you made?",
  "What makes you nostalgic?",
  "What's the scariest thing you've ever done?",
  "What fairy tale character do you most associate with?",
  "How much do you tend to swear in public?",
  "What's the craziest thing you've ever done for someone?",
  "What's the best piece of advice anyone has ever given you?",
  "Do you have a Princeton bucket list?",
  "What building would you donate to Princeton?",
  "What do you think about eating clubs?"
];
