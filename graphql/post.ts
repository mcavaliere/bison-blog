import { schema } from 'nexus';

// Post Type
schema.objectType({
  name: 'Post',
  description: 'A single blog post',
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.body();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

// Queries
schema.extendType({
  type: 'Query',
  definition(t) {
    // List Posts Query
    t.crud.post();
    t.crud.posts();
  },
});

// Mutations
schema.extendType({
  type: 'Mutation',
  definition(t) {
    // Create / Update Post
    t.crud.createOnePost();
    t.crud.updateOnePost();
    t.crud.deleteOnePost();
  },
});
