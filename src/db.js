import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log(`DB is Connected ..`);
    } catch (e) {
        console.error(`Error: ${e.message}`)
        process.exit(1) // Exit with failure (Code 1)
    }
}

export default connectDB