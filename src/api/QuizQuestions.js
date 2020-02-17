const quizQuestions = [
  {
    question: "What quote do you agree with most?",
    answers: [
      {
        type: "progressivism",
        content:
          "Though many of the poor have come to see the affluent middle class as its enemy, that class actually stands between the poor and the real powers in this society - the administrative octopus with its head in Washington, the conglomerates, the military complex."
        // https://www.brainyquote.com/authors/cesar-chavez-quotes"
      },
      {
        type: "conservatism",
        content:
          "Freedom of speech and thought matters, especially when it is speech and thought with which we disagree. The moment the majority decides to destroy people for engaging in thought it dislikes, thought crime becomes a reality."
        // https://www.goodreads.com/author/quotes/255605.Ben_Shapiro
      },
      {
        type: "liberalism",
        content:
          "Nobody who works a 40 hour week should have to live in poverty."
        // https://www.facebook.com/washingtonpost/posts/10151628258972293
      },
      {
        type: "libertarianism",
        content:
          "I have never understood why it is 'greed' to want to keep the money you have earned but not greed to want to take somebody else's money."
        // https://quotes.thefamouspeople.com/thomas-sowell-3032.php
      }
    ]
  },

  {
    question: "What do you value most?",
    answers: [
      {
        type: "progressivism",
        content: "Social Justice"
      },

      {
        type: "libertarianism",
        content: "Individual Freedom"
      },

      {
        type: "conservatism",
        content: "Charity"
      },

      {
        type: "liberalism",
        content: "Equality"
      }
    ]
  },

  {
    question: "What quote about freedom do you agree with most?",
    answers: [
      {
        type: "conservatism",
        content:
          "Freedom of speech and thought matters, especially when it is speech and thought with which we disagree. The moment the majority decides to destroy people for engaging in thought it dislikes, thought crime becomes a reality."
        // https://www.goodreads.com/quotes/7525250-freedom-of-speech-and-thought-matters-especially-when-it-is
      },

      {
        type: "liberalism",
        content:
          "Each of us deserves the freedom to pursue our own version of happiness. No one deserves to be bullied."
        // https://www.goodreads.com/quotes/520410-each-of-us-deserves-the-freedom-to-pursue-our-own
      },

      {
        type: "progressivism",
        content:
          "When a man is denied the right to live the life he believes in, he has no choice but to become an outlaw."
        // https://www.goodreads.com/quotes/33616-when-a-man-is-denied-the-right-to-live-the
      },

      {
        type: "libertarianism",
        content: "Tyranny is always better organized than freedom."
        // http://www.libertarianquotes.com/quotes1.html
      }
    ]
  },

  {
    question: "What quote about economics resonates with you?",
    answers: [
      {
        type: "liberalism",
        content:
          "The production of too many useful things results in too many useless people."
        // https://www.inc.com/geoffrey-james/top-10-quotes-about-economics.html
      },

      {
        type: "libertarianism",
        content:
          "The fact that the market is not doing what we wish it would do is no reason to automatically assume that the government would do better."
        // https://www.goodreads.com/author/quotes/2056.Thomas_Sowell
      },

      {
        type: "progressivism",
        content:
          "For capitalism is abolished root and branch by the bare assumption that it is personal consumption and not enrichment that works as the compelling motive."
        // https://en.wikiquote.org/wiki/Karl_Marx
      },

      {
        type: "conservatism",
        content:
          "Man's political freedom is illusory if he is dependent for his economic needs on the State."
        // http://www.conservativequotedatabase.com/economics
      }
    ]
  },

  {
    question: "What are your thoughts on money?",
    answers: [
      {
        type: "progressivism",
        content:
          "Money is the alienated essence of man's work and existence; this essence dominates him and he worships it."
        // https://www.goodreads.com/quotes/7763546-money-is-the-alienated-essence-of-man-s-labor-and-life
      },

      {
        type: "conservatism",
        content: "There is no such thing as a free lunch."
        // https://www.dailysignal.com/2015/08/01/22-quotes-to-celebrate-milton-friedman-day/
      },

      {
        type: "liberalism",
        content:
          "The game is rigged to work for those who already have money and power."
        // https://quotefancy.com/elizabeth-warren-quotes
      },

      {
        type: "libertarianism",
        content: "Let the people keep their money and their liberty."
        // https://www.goodreads.com/author/quotes/395622.Ron_Paul
      }
    ]
  },

  {
    question: "Do you think the government should be bigger?",
    answers: [
      {
        type: "progressivism",
        content: "Strongly Agree"
      },

      {
        type: "libertarianism",
        content: "Strongly Disagree"
      },

      {
        type: "conservatism",
        content: "Disagree"
      },

      {
        type: "liberalism",
        content: "Agree"
      }
    ]
  },

  {
    question: "What is your favorite slogan?",
    answers: [
      {
        type: "progressivism",
        content: "Workers of the world, unite!"
      },

      {
        type: "liberalism",
        content: "Our future is green."
      },

      {
        type: "libertarianism",
        content: "Taxation is theft."
      },

      {
        type: "conservatism",
        content: "Believe in America."
      }
    ]
  },

  {
    question: "What are your thoughts on speech?",
    answers: [
      {
        type: "liberalism",
        content:
          "Ideas are more powerful than guns. We would not let our enemies have guns, why should we let them have ideas?"
        // https://www.geckoandfly.com/20329/joseph-stalin-quotes/
      },

      {
        type: "conservatism",
        content:
          "Free speech is not just another value. It's the foundation of Western civilization."
        // https://www.brainyquote.com/quotes/jordan_peterson_926988
      },

      {
        type: "progressivism",
        content:
          "All of this is to say that words matter, and can have consequences for safety."
        // https://www.nationalreview.com/2019/05/aoc-does-not-understand-the-first-amendment/
      },

      {
        type: "libertarianism",
        content:
          "I disapprove of what you say, but will defend to the death your right to say it."
        // https://philebersole.wordpress.com/tag/free-speech/
      }
    ]
  },

  {
    question: "Which historical figure do you look up to?",
    answers: [
      {
        type: "libertarianism",
        content: "Milton Friedman"
      },

      {
        type: "liberalism",
        content: "Friedrich Nietzsche"
      },

      {
        type: "conservatism",
        content: "Winston Churchill"
      },

      {
        type: "progressivism",
        content: "Karl Marx"
      }
    ]
  },

  {
    question:
      "And finally, what are your overall thoughts about the government?",
    answers: [
      {
        type: "conservatism",
        content: "It needs to be smaller and should be well regulated."
      },

      {
        type: "progressivism",
        content:
          "Government needs to be more involved with people and their lives."
      },

      {
        type: "libertarianism",
        content: "They should not be trusted."
      },

      {
        type: "liberalism",
        content: "The government is able to fix a lot of our problems."
      }
    ]
  }
];

export default quizQuestions;
