import { Component } from '@angular/core';

@Component({
  template: `
    @for (user of users; track trackFn(user)) {
      <div>
        {{ user.name }}
      </div>
    }
  `,
})
class UserList {
  users = [{ name: 'John' }, { name: 'Doe' }];

  trackFn(user: { name: string }) {
    return user.name;
  }
}

// ng.enableProfiling(); Test

// "schematics": {
//   "@schematics/angular:component": { "type": "component" },
//   "@schematics/angular:directive": { "type": "directive" },
//   "@schematics/angular:service": { "type": "service" },
//   "@schematics/angular:guard": { "typeSeparator": "." },
//   "@schematics/angular:interceptor": { "typeSeparator": "." },
//   "@schematics/angular:module": { "typeSeparator": "." },
//   "@schematics/angular:pipe": { "typeSeparator": "." },
//   "@schematics/angular:resolver": { "typeSeparator": "." }
// }
