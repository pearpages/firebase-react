# NoSQL

## Querying Data

+ orderByKey
+ limitToFirst(5)
+ limitToLast(5)
+ orderByChild('dexterity')

```js
database.ref('characters').orderByKey().on('value', (snapshot) => {
      this.setState({
        characters: snapshot.val()
      });
    });
```