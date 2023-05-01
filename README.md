# Logi-DX Functions

The purpose of this library is to simply help out with an array of 
different functions that can just *generally* help out when dealing 
with the likes of runtime type checking. 

_____________________________________________________________________________________

## dates
So far the ```dates``` API is relatively immature, however, the end 
goal is to make a mature API filled with a bunch of helper functions 
when dealing with dates. So far there's a very small handful of 
functions, but the plan is for more to come. 

### dates.toUtc
The to UTC function simply takes the given date object & converts the 
date object to house UTC values as opposed to the values that would 
otherwise be storing values applicable to the given timezone. 

```typescript
dates(new Date()).toUtc(); // Today's date in UTC.
```

### date.utcNow
The UTC now function ignores the date provided via the ```dates``` 
API, it'll simply return the _current_ UTC date object.

```typescript 
dates(new Date(1990, 0, 10, 12, 10, 34)).utcNow(); // Today's date in UTC.
```

### dates.toDateOnly
The to date only function will return an object that contains 
a reference to the day, month & year. It's worth documenting, this 
object contains the _readable_ month, not the month index, like what
might happen if you were to use the native ```new Date().getMonth()```
function, with this object, January will have a month value of 1.

```typescript
dates(new Date('October 20, 2023 00:20:18')).toDateOnly();
/**
 * Output:
 *      {
 *          day: 20,
 *          month: 10,
 *          year: 2023
 *      }
 */
```

### dates.toTimeOnly
The to time only function will return an object that contains 
a reference to the hour, minute & second. 

```typescript
dates(new Date('October 20, 2023 00:20:18')).toTimeOnly();
/**
 * Output:
 *      {
 *          hour: 0,
 *          minute: 20,
 *          second: 18
 *      }
 */
```


### dates.ToDateTime
The to date time function is _essentially_ a union of _both_
```dates(x).toDateOnly()``` and ```dates(x).toTimeOnly()```.

```typescript
dates(new Date('October 20, 2023 00:20:18')).toDateTime();
/**
 * Output:
 *      {
 *          day: 20,
 *          month: 10,
 *          year: 2023,
 *          hour: 0,
 *          minute: 20,
 *          second: 18
 *      }
 */
```


_____________________________________________________________________________________

## is
The ```is``` API within this library is quite nice, since it _simply_
allows you the ability to implement a lot of boolean operations in a 
relatively nice & concise manner. The intention being that this _should_
help minimize _some_ of the complexity within the consuming codebase 
when conducting validation & verification. 

### is.empty
The is empty function is simple, it'll check to see if the given input 
is empty or not. _Note_, this function will throw a ```TypeError``` in 
the event that some invalid input has been provided. It'll currently 
accommodate to strings, arrays & objects that have a length property, 
that's also a valid integer, where the integer _must_ be at least ```0```.

```typescript
is({ length: 0 }).empty(); // true
is([]).empty(); // true
is('/t/r/n').empty(); // true
is({}).empty(); // throws a TypeError
```

### is.notEmpty
The is not empty function is really simple, it's just the ```is(x).empty()```
function, but negated.

```typescript
is({ length: 0 }).notEmpty(); // false
is([]).notEmpty(); // false
is('/t/r/n').notEmpty(); // false
is({}).notEmpty(); // throws a TypeError
```

### is.null
The is null function will simply check to see if the given input is of 
type null or undefined. There are some hidden quirks with nulls in 
JavaScript, but _generally_, null & undefined values are _typically_
treated in the same light, if not, very similar.

```typescript
is(null).null(); // true
is(undefined).null(); // true
is(123).null(); // false
```

### is.notNull
The is not null function is just the ```is(x).null()``` function, 
but negated. 

```typescript
is(null).notNull(); // false
is(undefined).notNull(); // false
is(123).notNull(); // true
```

### is.nullOrEmpty
The is null or empty function is a hybrid of the ```is(x).null()```
function & the ```is(x).empty()``` function. It's worth noting again 
that if an invalid data type is provided, a ```TypeError``` will be 
thrown since it's safer to not provide some invalid behavior or make 
assumptions on behalf of the consuming codebase.

```typescript
is({ length: 0 }).nullOrEmpty(); // true
is([]).nullOrEmpty(); // true
is('/t/r/n').nullOrEmpty(); // true
is(null).nullOrEmpty(); // true
is(undefined).nullOrEmpty(); // true
is({}).nullOrEmpty(); // throws a TypeError
```

### is.notNullOrEmpty
The is not null or empty function is simply the ```is(x).nullOrEmpty()```
function, but negated.

```typescript
is({ length: 0 }).notNullOrEmpty(); // false
is([]).notNullOrEmpty(); // false
is('/t/r/n').notNullOrEmpty(); // false
is(null).notNullOrEmpty(); // false
is(undefined).notNullOrEmpty(); // false
is({}).nullOrEmpty(); // throws a TypeError
```

### is.anObject
The is an object function will simply check if the provided input 
is in fact an object, yet excluding nulls, since null values are 
considered to be of type object within the JavaScript ecosystem.

```typescript
is({ }).anObject(); // true
is([]).anObject(); // true
is(null).anObject(); // false
is(123).anObject(); // false
is('Hello world!').anObject(); // false
```

### is.notAnObject
The is not an object function is simply the ```is(x).anObject()```
function, but negated.

```typescript
is({ }).notAnObject(); // false
is([]).notAnObject(); // false
is(null).notAnObject(); // true
is(123).notAnObject(); // true
is('Hello world!').notAnObject(); // true
```

### is.propertyOf
The is property of function will simply check that some property 
argument, of type string, exists against the given input, provided 
that it is in fact an object. If it is not an object, then it'll simply 
return false.

```typescript
is([]).propertyOf('length'); // true
is(null).propertyOf('length'); // false
```

### is.notPropertyOf
The is not property of is simply the ```is(x).propertyOf``` function, 
but negated. 

```typescript
is([]).propertyOf('length'); // false
is(null).propertyOf('length'); // true
```

### is.anInstanceOf
The is an instance of function will simply check that the given 
input is an instance of some given type.

```typescript
class ExampleClass {}
class OtherClass {}

is(new ExampleClass()).anInstanceOf(ExampleClass); // true
is(new ExampleClass()).anInstanceOf(OtherClass); // false
```

### is.notAnInstanceOf
The is not an instance of function is simply the ```is(x).anInstanceOf(y)```
function, but negated.

```typescript
class ExampleClass {}
class OtherClass {}

is(new ExampleClass()).notAnInstanceOf(ExampleClass); // false
is(new ExampleClass()).notAnInstanceOf(OtherClass); // true
```

### is.typeOf
The is type of function will simply check the type of the given 
input, against the given type as a string.

```typescript 
is(123).typeOf('number'); // true
is('Hello world!').typeOf('string'); // true
is(null).typeOf('object');// true
is(undefined).typeOf('object'); // false
```

### is.notTypeOf
The is not type of function is simply the ```is(x).typeOf(y)``` function, 
but negated. 

```typescript 
is(123).notTypeOf('number'); // false
is('Hello world!').notTypeOf('string'); // false
is(null).notTypeOf('object');// false
is(undefined).notTypeOf('object'); // true
```

### is.string
The is string function will simply check that the given input is of 
type string. Under the hood, it's implementing ```is(x).typeOf('string')```.

```typescript 
is(123).string(); // false
is('Hello world!').string(); // true
```

### is.notString
The is not string function is simply the ```is(x).string()``` function, 
but negated. 

```typescript 
is(123).notString(); // true
is('Hello world!').notString(); // false
```

### is.anArray
The is an array function will exclusively check that the given argument 
is an array.

```typescript
is([]).anArray(); // true
is({}).anArray(); // false
```

### is.notAnArray
The is not an array function simply implements the ```is(x).anArray``` function, 
but negated. 

```typescript
is([]).notAnArray(); // false
is({}).notAnArray(); // true
```

### is.numeric
The is numeric function will simply ensure that the given input is 
of a numeric type, regardless of it being an integer or a 
double/etc. Take note, _currently_ the API will exclude ```BigInt``` 
values from this method implementation.

```typescript
is(0).numeric(); // true
is(1.231).numeric(); // true
is(BigInt(12)).numeric(); // false
is('123').numeric(); // false
```

### is.notNumeric
The is not numeric function simply implements the ```is(x).numeric()``` function, 
but negated. 

```typescript
is(0).numeric(); // false
is(1.231).numeric(); // false
is(BigInt(12)).numeric(); // true
is('123').numeric(); // true
```

### is.anInteger
The is an integer function will simply check that the given value is of type 
integer, to clarify, this _does_ exclude big int values. 

```typescript
is(123).anInteger(); // true
is(123.456).anInteger(); // false
```

### is.notAnInteger
The is not an integer function simply implements the ```is(x).anInteger()```,
but negated. 

```typescript
is(123).notAnInteger(); // false
is(123.456).notAnInteger(); // true
```

### is.positive
The is positive function will simply ensure that the provided value 
is greater than 0.

```typescript
is(0).positive(); // false
is(-1).positive(); // false
is(123).positive(); // true
```

### is.notPositive
The is not positive function simply implements the ```is(x).positive()``` function, 
but negated. 

```typescript 
is(0).notPositive(); // true
is(-1).notPositive(); // true
is(123).notPositive(); // false
```

### is.negative
The is negative function will simply ensure that the provided value is 
less than 0.

```typescript
is(0).negative(); // false
is(-1).negative(); // true
is(123).negative(); // false
```

### is.notNegative
The is not negative function simply implements the ```is(x).negative()``` function,
but negated.

```typescript
is(0).notNegative(); // true
is(-1).notNegative(); // false
is(123).notNegative(); // true
```

### is.whiteSpace
The is whitespace function relies on the provided value being of type string, 
if it is not of type string, then this function will throw a ```TypeError```.

```typescript
is('Hello world!').whiteSpace(); // false
is('/r/t/n').whiteSpace(); // true
is({}).whiteSpace(); // throws a TypeError
```

### is.notWhiteSpace
The is not whitespace function simply implements the ```is(x).whiteSpace()```
function, but negated. 

```typescript
is('Hello world!').notWhiteSpace(); // true
is('/r/t/n').notWhiteSpace(); // false
is({}).whiteSpace(); // throws a TypeError
```

_____________________________________________________________________________________

## strings
The ```strings``` API currently consists of a handful of helpful 
little functions when handling strings within the JavaScript ecosystem. 

### strings.strip 
The strip function will be sure to remove _all_ white spaces, be that a new line,
carriage return, tab, etc. 

```typescript
strings('\t \t \n \r \r \n \t').strip(); // ''
```

### strings.isEmpty
The is empty function simply uses the ```strings(x).strip()``` function & 
then checks the length of the string returned from the strip function. 

```typescript
const input: string = '\t \t \n \r \r \n \t';
const output: string = strings(input).strip();
const empty: boolean = strings(output).isEmpty(); // true
```

### strings.isNotEmpty 
The is not empty function simply implements the ```strings(x).isEmpty())```
function, but negated. 

```typescript
const input: string = '\t \t \n \r \r \n \t';
const output: string = strings(input).strip();
const empty: boolean = strings(output).isNotEmpty(); // false
```

### strings.isNullOrEmpty
The is null or empty function is simple, it'll check that the provided 
value is not null & then continue to check whether or not the given 
string is empty or not. 

```typescript
const input: string = '\t \t \n \r \r \n \t';
const hacky: any = null;
const output: string = strings(input).strip();
const empty: boolean = strings(output).isNullOrEmpty(); // true
const isNullOrEmpty: boolean = strings(hacky).isNullOrEmpty(); // true
```

### strings.isNotNullOrEmpty
The is not null or empty function simply implements the ```strings(x).isNullOrEmpty()```
function, but negated.

```typescript
const input: string = '\t \t \n \r \r \n \t';
const hacky: any = null;
const output: string = strings(input).strip();
const empty: boolean = strings(output).isNotNullOrEmpty(); // false
const isNullOrEmpty: boolean = strings(hacky).isNotNullOrEmpty(); // false
```

### strings.remove
The remove function will simply take the provided string & then take a 
character & remove the first instance of that character within the string. 

```typescript
strings('Hello world!').remove('l'); // Helo world!
```

### strings.removeAll
The remove all function is similar to the remove function, however it'll 
make sure to remove _all_ instance of the given character, not only the first. 

```typescript
strings('Hello world!').removeAll('l'); // Heo word!
```
_____________________________________________________________________________________

## Notes
This library is a current work in progress, there is a _lot_ more to 
come.
