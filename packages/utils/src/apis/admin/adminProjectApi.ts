import { adminInstance } from '../axiosConfig';

export type ProjectImageType = '썸네일' | '상세';
export type ProjectUrlType = '서비스' | '깃허브' | '비핸스' | '인스타';
export interface ProjectItemInterface {
  name: string;
  description: string;
  generation: number;
  projectUrls: {
    category: ProjectUrlType;
    linkUrl: string;
  }[];
  projectImages: {
    category: ProjectImageType;
    imageUrl: string;
  }[];
  participants: {
    part: '기획' | '디자인' | '프론트엔드' | '백엔드';
    name: string;
  }[];
}
export interface ProjectListInterface {
  projectBriefInfoVos: {
    id: number;
    name: string;
    description: string;
    generation: number;
    thumbnailImage: {
      id: number;
      category: ProjectImageType;
      imageUrl: string;
      project: ProjectItemInterface;
    };
  }[];
  pageInfo: {
    pageNum: number;
    limit: number;
    totalPages: number;
    totalElements: number;
  };
}

export const adminProjectApi = {
  GET_PROJECTS: async ({
    pageNum,
    limit,
  }: {
    pageNum: number;
    limit: number;
  }) => {
    const response = await adminInstance.get(`/projects`, {
      params: {
        pageNum,
        limit,
      },
    });

    return response.data.data;
  },
  POST_PROJECT: async (project: ProjectItemInterface) => {
    const response = await adminInstance.post(`/projects`, project);

    return response.data.data;
  },
  PATCH_PROJECT: async (project: ProjectItemInterface) => {
    const response = await adminInstance.patch(`/projects`, project);

    return response.data.data;
  },
  GET_PROJECT: async (projectId: number) => {
    const response = await adminInstance.delete(`/projects/${projectId}`);

    return response.data.data;
  },
  DELETE_PROJECT: async (projectId: number) => {
    const response = await adminInstance.delete(`/projects/${projectId}`);

    return response.data.data;
  },
};
