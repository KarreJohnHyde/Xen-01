# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createProject, createUser, listProjects, getProject } from '@xeno1/dataconnect';


// Operation CreateProject:  For variables, look at type CreateProjectVars in ../index.d.ts
const { data } = await CreateProject(dataConnect, createProjectVars);

// Operation CreateUser:  For variables, look at type CreateUserVars in ../index.d.ts
const { data } = await CreateUser(dataConnect, createUserVars);

// Operation ListProjects: 
const { data } = await ListProjects(dataConnect);

// Operation GetProject:  For variables, look at type GetProjectVars in ../index.d.ts
const { data } = await GetProject(dataConnect, getProjectVars);


```