import {
  dbAddTag,
  dbDeleteTag,
  dbGetTags,
  dbUpdateTag,
  dbAddUnseenTags,
} from '../../models/admin/tags';

export const getTags = (request, reply) => {
  return dbGetTags().then(tags => reply.response(tags));
};

export const deleteTag = (request, reply) => {
  return dbDeleteTag(request.params.tagId).then(resp => reply.response(resp));
};

export const addTag = (request, reply) => {
  return dbAddTag(request.payload, request.pre.user.id)
    .then(async tag => {
      await dbAddUnseenTags(tag[0].id);
      return tag;
    })
    .then(tag => reply.response(tag));
};

export const updateTag = (request, reply) => {
  return dbUpdateTag(request.payload.tagId, request.payload.name).then(data =>
    reply.response(data),
  );
};
