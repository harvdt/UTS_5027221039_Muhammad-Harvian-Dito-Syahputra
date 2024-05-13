import dotenv from "dotenv"

dotenv.config()

export const appListener = () => {
  console.log(`Client running on port 3000 [since ${new Date().toISOString()}]`)
}