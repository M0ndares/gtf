# Guess The Flag
A fast-paced, interactive TypeScript web game designed to test players' geographical knowledge by guessing 50 different countries against the clock.

![GTF Gameplay](gtf.mp4)
---

### Key Features
* **50 Progressive Rounds:** Features a curated array of 50 countries from across the globe with dynamic image loading.
* **Language accesibility:** Available both in spanish and english.
* **Dual-Timer System:** 
  * **Per-Round Countdown:** Limitates the user to exactly 10 seconds per country.
  * **Global Stop-Watch:** Tracks the overall time (`MM:SS`) taken to complete the challenge for leaderboard ranking.

---

### How the Game Works
1. **The Challenge:** The game starts a global timer and loads the first country challenge.
2. **The Turn:** The user types their answer into the input field. 
   * If **Correct**: The round counter increments, the visual asset (flag/map image) updates, the 10-second round timer resets, and the input field clears automatically.
   * If **Wrong**: The game provides instant feedback prompting the user to try again before time runs out.
3. **Game Over Conditions:** 
   * **Victory:** Successfully passing all 50 rounds triggers a congratulations screen and stops the timers.
   * **Defeat:** Letting the 10-second countdown hit zero locks the inputs, reveals the correct answer, and prompts a "Try Again" screen.

---

### Tech Stack
- **Frontend:** HTML5, CSS3, TypeScript
- **Data Structures:** Multidimensional-mapped native arrays for sequential indexing of answers and local media path routing. 