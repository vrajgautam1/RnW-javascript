promises has 3 parts: pending, resolved, rejected

we need APIs

promise based function are not recognized as regular functions, they are objects with methods like then, catch, finally

we must then and catch to use these promise based functions

reject will go to catch

response will go to then

mostly 1 catch and 2 then. usually when any then gives error then catch will work

inside a then if we return something like result. then it will be passed to the next then. if we return nothing then it will be undefined. if we return