export const permission_generator = (role: string) => {
  switch (role) {
    case 'admin':
      return 'admin';
    case 'user':
      return 'user';
    case 'collaborator':
      return 'collaborator';
    case 'analyst':
      return 'analyst';
    case 'enterprise':
      return 'enterprise';
    default:
      return null;
  }
};
