type ResourceObject = {
    id: number,
    name: string,
    description: string | null | undefined,
    createdAt: string,
    updatedAt: string,
    archived: boolean
};

export default ResourceObject;