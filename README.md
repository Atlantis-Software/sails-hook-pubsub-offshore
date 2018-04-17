# sails-hook-pubsub-offshore

[![npm version](https://badge.fury.io/js/sails-hook-pubsub-offshore.svg)](https://www.npmjs.com/sails-hook-pubsub-offshore)
[![Build Status](https://travis-ci.org/Atlantis-Software/sails-hook-pubsub-offshore.svg?branch=master)](https://travis-ci.org/Atlantis-Software/sails-hook-pubsub-offshore)
[![Coverage Status](https://coveralls.io/repos/github/Atlantis-Software/sails-hook-pubsub-offshore/badge.svg?branch=master)](https://coveralls.io/github/Atlantis-Software/sails-hook-pubsub-offshore?branch=master)
[![NSP Status](https://nodesecurity.io/orgs/atlantis/projects/807d2725-4709-4f65-8a00-fdc0bc89da44/badge)](https://nodesecurity.io/orgs/atlantis/projects/807d2725-4709-4f65-8a00-fdc0bc89da44)
[![Dependencies Status](https://david-dm.org/Atlantis-Software/sails-hook-pubsub-offshore.svg)](https://david-dm.org/Atlantis-Software/sails-hook-pubsub-offshore)

Sails pubsub using offshore ORM

## Install

Install [sails-hook-orm-offshore](https://github.com/Atlantis-Software/sails-hook-orm-offshore) first:
```sh
$ npm install sails-hook-orm-offshore --save
```

Install this hook with:

```sh
$ npm install sails-hook-pubsub-offshore --save
```

#PubS: Following PubSub methods are prefixed with a underscore!

`PubSub Methods`
````js
Model._publishCreate();
Model._publishUpdate();
Model._publishDestroy();

Model._publishAdd();
Model._publishRemove();

Model._watch();
Model._unwatch();

Model._introduce();
Model._retire();

Model._room();
```

# Configuration

`.sailsrc`

```
"hooks": {
  "blueprints": false,
  "orm": false,
  "pubsub": false
}
```
