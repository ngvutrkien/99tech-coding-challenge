import ResourceObject from "./resourceObject";

type PaginatedResourceObject = {
    data: Array<ResourceObject>,
    total: number,
    offset: number,
    limit: number
};

export default PaginatedResourceObject;
