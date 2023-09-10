# XML to JSON parser [![npm](https://img.shields.io/npm/v/xml-to-json-parser)](https://www.npmjs.com/package/xml-to-json-parser) [![npm](https://img.shields.io/npm/dt/xml-to-json-parser)](https://www.npmjs.com/package/xml-to-json-parser?activeTab=versions)

A library to parse XML to JSON

# Usage

```js
import { xmlToJson } from "xml-to-json-parser";

const out = xmlToJson(`
<guestbook>
    <guest>
        <fname>Terje</fname>
        <lname>Beck</lname>
    </guest>
    <guest>
        <fname>Jan</fname>
        <lname>Refsnes</lname>
    </guest>
    <guest>
        <fname>Torleif</fname>
        <lname>Rasmussen</lname>
    </guest>
    <guest>
        <fname>anton</fname>
        <lname>chek</lname>
    </guest>
    <guest>
        <fname>stale</fname>
        <lname>refsnes</lname>
    </guest>
    <guest>
        <fname>hari</fname>
        <lname>prawin</lname>
    </guest>
    <guest>
        <fname>Hege</fname>
        <lname>Refsnes</lname>
    </guest>
</guestbook>
`);

console.log(JSON.stringify(out, null, 4));
```

Output:

```json
{
  "guestbook": {
    "guest": [
      {
        "fname": "Terje",
        "lname": "Beck"
      },
      {
        "fname": "Jan",
        "lname": "Refsnes"
      },
      {
        "fname": "Torleif",
        "lname": "Rasmussen"
      },
      {
        "fname": "anton",
        "lname": "chek"
      },
      {
        "fname": "stale",
        "lname": "refsnes"
      },
      {
        "fname": "hari",
        "lname": "prawin"
      },
      {
        "fname": "Hege",
        "lname": "Refsnes"
      }
    ]
  }
}
```
