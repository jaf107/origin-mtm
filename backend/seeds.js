

  const allGames = [
    {
        name: "Assassin’s Creed II", descp: "Action-Role Playing Game", url: "./assets/images/assasinscreed.jpg",
        detail: "Assassin’s Creed II is a new beginning. Ancient Egypt, a land of majesty and intrigue, is disappearing in a ruthless fight for power. Unveil dark secrets and forgotten myths as you go back to the one founding moment: The Origins of the Assassin’s Brotherhood.",
        addedWishlist: false
      },
      {
        name: "Grand Theft Auto V", descp: "Action-Adventure Game", url: "./assets/images/GTAV.jpg",
        detail: "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.",
        addedWishlist: false
      },
      {
        name: "Valorant", descp: "5v5 character-based tactical FPS", url: "./assets/images/valorant-slide.jpg",
        detail: "Valorant is a tactical shooting game involving two teams with 5 players in each team. Every player can sign in and play remotely from anywhere in the world. Every game has 25 rounds and the team that wins 13 of them first wins the game. Players can choose their in-game characters called agents at the start of the game.",
        addedWishlist:false
      },
      {
        name: "Apex Legends", descp: "Battle Royale Shooter Game", url: "./assets/images/Apex-Legends.jpg",
        detail: "Welcome to the next evolution of Hero Shooter. Conquer with character in Apex Legends, a free-to-play* Hero shooter where legendary characters with powerful abilities team up to battle for fame & fortune on the fringes of the Frontier.",
        addedWishlist: false
      },
      {
        name: "CS:GO", descp: "Multiplayer FPS Game", url: "./assets/images/csgo.jpg",
        detail: "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).",
        addedWishlist: false
      },
      {
        name: "Forza Horizon 5", descp: "Racing Game", url: "./assets/images/forza-horizon-5.jpg",
        detail: "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.",
        addedWishlist: false
      },
      {
        name: "FIFA 2022", descp: "Football Simulation Game", url: "./assets/images/FIFA2022.jpg",
        detail: "Powered by Football™, EA SPORTS™ FIFA 22 brings the game even closer to the real thing with fundamental gameplay advances and a new season of innovation across every mode.EA SPORTS™ FIFA 22 brings the game even closer to the real thing with fundamental gameplay advances and a new season of innovation across every mode.",
        addedWishlist: false
      },
      {
        name: "Elden Ring", descp: "The New Fantasy Action RPG", url: "./assets/images/EldenRing.jpg",
        detail: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
        addedWishlist: false
      },
      {
        name: "Far Cry 6", descp: "Action Adventure FPS", url: "./assets/images/far-cry-6.jpg",
        detail: "Embrace the gritty experience of an improvised modern-day guerrilla and take down a Dictator and his son to free Yara.",
        addedWishlist: false
      }
  ];

  const seedDB = async() =>{
      await game.deleteMany({});
      await game.insertMany(allGames);
  };

  exports.seedDB1= async() => {
    await game.deleteMany({});
    await game.insertMany(allGames);
  }

  seedDB().then(() =>{
      mongoose.connection.close();
  });
