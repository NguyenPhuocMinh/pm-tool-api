'use strict';

import { teamController } from '@mappings/controllers';

/**
 * @description Team router
 */
const teamRouter = [
  {
    pathName: '/teams',
    method: 'GET',
    methodName: 'getAllTeam',
    controller: teamController.getAllTeam
  },
  {
    pathName: '/teams',
    method: 'POST',
    methodName: 'createTeam',
    controller: teamController.createTeam
  },
  {
    pathName: '/teams/:id',
    method: 'GET',
    methodName: 'getTeam',
    controller: teamController.getTeam
  },
  {
    pathName: '/teams/:id',
    method: 'PUT',
    methodName: 'updateTeam',
    controller: teamController.updateTeam
  },
  {
    pathName: '/teams/:id',
    method: 'DELETE',
    methodName: 'deleteTeam',
    controller: teamController.deleteTeam
  },
  {
    pathName: '/teams/:id/membersInTeam',
    method: 'GET',
    methodName: 'getAllMemberInTeam',
    controller: teamController.getAllMemberInTeam
  },
  {
    pathName: '/teams/:id/membersNotOnTeam',
    method: 'GET',
    methodName: 'getAllMemberNotOnTeam',
    controller: teamController.getAllMemberNotOnTeam
  },
  {
    pathName: '/teams/:id/addMembersToTeam',
    method: 'PATCH',
    methodName: 'addMembersToTeam',
    controller: teamController.addMembersToTeam
  },
  {
    pathName: '/teams/:id/removeMembersFromTeam',
    method: 'PATCH',
    methodName: 'removeMembersFromTeam',
    controller: teamController.removeMembersFromTeam
  }
];

export default teamRouter;
