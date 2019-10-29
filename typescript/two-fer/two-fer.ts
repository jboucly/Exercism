export default class TwoFer {
  public static twoFer(s: string=''): string {
    if (s.trim().length === 0 || s === '') return 'One for you, one for me.';
    else return 'One for ' + s.trim() + ', one for me.';
  }
}