export function format(rawReport: string): string {
  let formattedReport = rawReport;

  const matches = rawReport.matchAll(/^[\w ]+: \n/gm);
  const replacements: Replacement[] = [];
  let match: IteratorResult<RegExpMatchArray, any> = { done: false, value: [] };

  while (!match.done && (match = matches.next())) {
    if (!match.value) continue;
    const original = match.value[0] as string;

    replacements.push({ original: original, new: original.replace(/ \n$/g, "\n") });
  }

  for (let replacement of replacements) {
    formattedReport.replace(replacement.original, replacement.new);
  }

  return formattedReport;
}

interface Replacement {
  original: string;
  new: string;
}
