'use strict';

const organizationPermission = {
  GET_ALL: 'ORGANIZATION_GET_ALL',
  GET_ID: 'ORGANIZATION_GET_ID',
  CREATE: 'ORGANIZATION_CREATE',
  UPDATE: 'ORGANIZATION_UPDATE',
  DELETE: 'ORGANIZATION_DELETE',
  GET_PROJECT_IN_ORGANIZATION: 'GET_PROJECT_IN_ORGANIZATION',
  GET_PROJECT_NOT_ORGANIZATION: 'GET_PROJECT_NOT_ORGANIZATION',
  ADD_PROJECT_TO_ORGANIZATION: 'ADD_PROJECT_TO_ORGANIZATION',
  REMOVE_PROJECT_FROM_ORGANIZATION: 'REMOVE_PROJECT_FROM_ORGANIZATION'
};

export default organizationPermission;
