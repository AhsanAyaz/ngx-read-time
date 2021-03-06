export const demoTextWithMarkup = `
<h1>Understanding Discriminated Unions in Typescript
      <span>
        <a href="https://dev.to/ahsanayaz/understanding-discriminated-unions-in-typescript-5cd">
          (Source)
        </a>
      </span>
    </h1>
    As you may already know, Typescript is a superset of Javascript; and is simply awesome. There are numerous features we love and hear about Typescript every day. For example, we could have a look at interfaces, enums, unions, intersections, type guards and much more.

I this article, we're going to focus on Discriminated Unions. We'll look into what they are and by the end of the article, you'll have a good understanding of where you can use these.




  <h3>Discriminated Unions</h3>


Discriminated Unions, also called algebraic data types or tagged unions are a combination of three things:


<ul>
  <li>The discriminant</li>
  <li>The union</li>
  <li>Type guards</li>
</ul>


Let's understand each of the above, one by one with examples.




  <h4>The Discriminant</h4>


The discriminant is a singleton type property which is common in each of the elements of the union. You can read more about Typescript Singleton Types in this article.

See the example below:


You can see that the vType property in the interfaces is the discriminant or the tag. The other properties are specific to the corresponding interfaces.




  <h4>The Union</h4>


The union of the interfaces can be simply created as follows:


We can now use this union (type) in our code where we can have more than one kind of vehicles expected in a variable.




  <h4>The Type Guards</h4>


Consider the following example based on the interfaces we defined above:


The above code will cause the typescript compiler to throw the following error:


Property 'capacity' does not exist on type 'Vehicle'.
  Property 'capacity' does not exist on type 'IMotorcycle'.




The reason is that the property capacity does not exist on the interface IMotorCycle. Well, actually it doesn't exist in ICar too but it already breaks checking IMotorCycle, which is declared before ICar, so it doesn't reach checking ICar.

Well, how do we fix this? Using type guards of course. See an example below:


Using the switch & case operators fix the problem for us by serving as type guards, making sure we're accessing the right properties of the vehicle that we've got in the evaluatePrice method.

If you're using an editor like VSCode, you'll notice that before using these type guards, the IntelliSense may only have shown you vType as a property when you typed vehicle.. But if you type vehicle. inside any of the case statements now, you'll see that now, the appropriate properties by the IntelliSense are shown from the appropriate interfaces.




  <h4>Checking Exhaustiveness</h4>


What if we wanted to introduce a new type/interface to the union Vehicle? You might think that the evaluatePrice function doesn't have the case handled for that. And that's accurate. But we need the compiler to let us know at build time (or using tslint etc) that we need to cover all variants of the type Vehicle. This is called Exhaustiveness Checking. One of the ways to ensure we're covering all variants of a union is to use never, which the typescript compiler uses for exhaustiveness.

Assume we added a new type IBicycle to the Vehicle union as below:


We'll be able to use never for the exhaustiveness check as follows:


The above should show an error in the editor (using lint tools) or on compile time as below:


Type 'IBicycle' is not assignable to type 'never'.




The above shows we need to handle IBicycle as well. Once we add the case for IBicycle in the evaluatePrice method as below, the error should go away.


You can find a working example here on Stackblitz.




  <h3>Conclusion</h3>


Discriminated unions are pretty powerful combined with Typescript's ability to differentiate the types based on the discriminants/tags. When used right, this can bring significant readability to the code and is great when it comes to writing reliable dynamic types with functions.




  Further Reading


Exhaustive Type Checking with TypeScript!
Advanced Types - Typescript
CodingBlast Typescript series

If you learned something new from this article, don't forget to show this to your friends and workmates. Happy coding!
`;

// Courtesy of https://github.com/ngryman/reading-time
export function generateText(words: number) {
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  chars += '0123456789àâéèêôùûçÀÂÉÈÔÙÛÇ';
  const charsLength = chars.length;
  let text = '';

  for (let i = 0; i < words; i++) {
    const wordLength = Math.ceil(Math.random() * 10);
    for (let j = 0; j < wordLength; j++) {
      text += chars[Math.floor(Math.random() * charsLength)];
    }
    text += ' ';
  }

  return text;
}
