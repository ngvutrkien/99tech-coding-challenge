type ResourceModel = {
    id: number,
    name: string,
    description: string | null | undefined,
    created_at: string,
    updated_at: string,
    archived: boolean
};

export default ResourceModel;