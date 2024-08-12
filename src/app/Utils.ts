export class StringInfo {
    upperCase(arg: string): string {
        if (!arg) {
            throw Error('Invalid argument')
        }
        return arg.toUpperCase()
    }
}