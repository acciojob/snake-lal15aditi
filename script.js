// //your code here
// const gameContainer = document.getElementById('gameContainer');
// const scoreElement = document.getElementById('score');

// const gridSize = 40;
// const snakeSpeed = 100; // milliseconds
// let score = 0;

// let snake = [{ row: 20, col: 1 }];
// let direction = 'right';
// let food = generateFood();

// function generateFood() {
//     let row, col;
//     do {
//         row = Math.floor(Math.random() * gridSize);
//         col = Math.floor(Math.random() * gridSize);
//     } while (snake.some(segment => segment.row === row && segment.col === col));
//     return { row, col };
// }

// function updateGame() {
//     const head = { ...snake[0] };
//     switch (direction) {
//         case 'up':
//             head.row--;
//             break;
//         case 'down':
//             head.row++;
//             break;
//         case 'left':
//             head.col--;
//             break;
//         case 'right':
//             head.col++;
//             break;
//     }

//     // Check for collisions
//     if (head.row < 0 || head.row >= gridSize || head.col < 0 || head.col >= gridSize || snake.some(segment => segment.row === head.row && segment.col === head.col)) {
//         alert('Game over!');
//         location.reload();
//         return;
//     }

//     snake.unshift(head);
//     if (head.row === food.row && head.col === food.col) {
//         score += 10;
//         scoreElement.textContent = score;
//         food = generateFood();
//     } else {
//         snake.pop();
//     }

//     renderGame();
//     setTimeout(updateGame, snakeSpeed);
// }

// function renderGame() {
//     const gridElements = gameContainer.getElementsByClassName('snakeBodyPixel');
//     for (let i = 0; i < gridElements.length; i++) {
//         gridElements[i].remove();
//     }

//     // Render the snake
//     for (let i = 0; i < snake.length; i++) {
//         const pixel = document.createElement('div');
//         pixel.className = 'snakeBodyPixel';
//         pixel.style.gridRow = snake[i].row + 1;
//         pixel.style.gridColumn = snake[i].col + 1;
//         gameContainer.appendChild(pixel);
//     }

//     // Render the food
//     const foodPixel = document.createElement('div');
//     foodPixel.className = 'food';
//     foodPixel.style.gridRow = food.row + 1;
//     foodPixel.style.gridColumn = food.col + 1;
//     gameContainer.appendChild(foodPixel);
// }

// document.addEventListener('keydown', (e) => {
//     switch (e.key) {
//         case 'ArrowUp':
//             if (direction !== 'down') {
//                 direction = 'up';
//             }
//             break;
//         case 'ArrowDown':
//             if (direction !== 'up') {
//                 direction = 'down';
//             }
//             break;
//         case 'ArrowLeft':
//             if (direction !== 'right') {
//                 direction = 'left';
//             }
//             break;
//         case 'ArrowRight':
//             if (direction !== 'left') {
//                 direction = 'right';
//             }
//             break;
//     }
// });

// updateGame();
