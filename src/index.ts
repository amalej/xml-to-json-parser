export function xmlToJson(xmlInput: string) {
  const xml = xmlInput.trim();
  if (!/<.*?>/gm.test(xmlInput)) return xmlInput;
  const tagStart = xml.match(/<.*?>/)[0];
  const tagText = tagStart.replace(/[<|>]/g, "");
  const tagContentRegex = new RegExp(
    `(?<=<${tagText}>)(.*?)(?=<\/${tagText}>)`,

    "ms"
  );
  const tagRegex = new RegExp(
    `(?=<${tagText}>)(.*?)(?<=<\/${tagText}>)`,

    "ms"
  );
  let json = {};
  json[tagText] = xmlToJson(xmlInput.match(tagContentRegex)[0]);
  const nextXml = xml.replace(tagRegex, "");
  const nextXmlJson = xmlToJson(nextXml);
  if (nextXmlJson[tagText] !== undefined) {
    if (nextXmlJson[tagText].length > 1) {
      json[tagText] = [json[tagText], ...nextXmlJson[tagText]];
    } else {
      json[tagText] = [json[tagText], nextXmlJson[tagText]];
    }
  } else {
    json = { ...json, ...nextXmlJson };
  }

  return json;
}
