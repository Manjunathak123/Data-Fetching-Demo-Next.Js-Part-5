/* pending(useFormStatus) vs isPending(useActionState):-
-> Both can help us determine if a form is being submitted and let us disbale submit button -  but there is an 
interesting difference between them
-> the pending state from useFormStatus is specifically for form submission.
-> isPending from useActionState can be used with any action, not just form submission
-> Go with pending from useFormStatus when you're building reusable components that are meant to live inside forms. 
For example submit buttons or loading spinners that you will want to use across different forms in your applocation.
-> Choose isPending from useActionState when you need to keep track of server actions that aren't necessarily related to
 form submissions. it gives that extra flexibility.

*/