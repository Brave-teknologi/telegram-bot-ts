# Telegram Bot Template

This repository is a structured and scalable template for creating Telegram bots using TypeScript. The project leverages modular design principles to separate concerns, making the bot easier to develop, maintain, and extend.

## Features

-  **Modular Architecture**: Commands, handlers, routes, and services are organized in separate directories for maintainability.
-  **TypeScript Support**: Strongly typed programming for better development experience and fewer runtime errors.
-  **Database Integration**: Includes Prisma ORM for database management and migrations.
-  **Middleware Support**: Centralized middleware for common pre-processing tasks.
-  **Scene Management**: Implements Telegram scenes for conversational flows.
-  **Easy to Extend**: Add new commands, handlers, and scenes with minimal effort.

## Setup and Installation

### Prerequisites

-  Node.js (v16 or above)
-  pnpm (preferred package manager)
-  Telegram Bot Token

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Brave-teknologi/telegram-bot-ts.git
   cd my-own-bot
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up the environment variables:
   Copy `.env.example` file:

   ```bash
   cp .env.example .env
   ```

4. Run database migrations:

   ```bash
   npx prisma migrate dev
   ```

5. Start the bot in development mode:
   ```bash
   pnpm run dev
   ```

## Scripts

-  **`pnpm run dev`**: Start the bot with Nodemon for development.
-  **`pnpm run build`**: Compile TypeScript files to JavaScript.
-  **`pnpm start`**: Start the bot in production mode.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
