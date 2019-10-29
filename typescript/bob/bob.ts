export default class Bob {
    hey(message: string ): string {
        if (message.trim().endsWith('?')) return "Sure.";
        else if (message.trim().length == 0) return "Fine. Be that way!";
        else if (message.toUpperCase() == message && /[A-z]/.test(message)) return "Whoa, chill out!";
        return "Whatever."
    }
}