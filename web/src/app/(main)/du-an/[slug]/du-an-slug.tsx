/** @format */

import { NewsAPI } from "@/api/news/news.api";
import { ProjectAPI } from "@/api/projects/projects.api";
import EditorClientWrapper from "@/components/editor/editor-wrapper";
import { ImageLoader } from "@/components/ui/image-loader";
import { ProjectInterface } from "@/types/project";
import { FormatUtils } from "@/utils/format";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

const DuAnSlug = async ({ params }: Props) => {
  const { slug } = await params;

  let project: ProjectInterface | undefined;

  try {
    const res = await ProjectAPI.getProjectWithSlug({ slug });
    project = res?.data?.project;
  } catch (error) {
    console.error("Lỗi khi gọi API lấy bài viết:", error);
  }

  if (!project) {
    return (
      <div className="container mx-auto max-w-6xl py-10 px-4 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Không tìm thấy dự án này
        </h1>
        <p className="text-gray-600 mb-6">
          Bài viết có thể đã bị xoá hoặc không tồn tại. Mời bạn xem các dự án
          nổi bật khác.
        </p>

        <Link
          href="/danh-muc/du-an"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium text-sm rounded-lg shadow hover:bg-blue-700 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
          Quay về trang dự án
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-6xl py-10 px-4 overflow-hidden">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {project.title}
        </h1>
        <div className="text-sm text-gray-500 flex flex-wrap gap-4">
          <span>
            Ngày đăng: {FormatUtils.formatDate(project.createdAt ?? "")}
          </span>
          {project.updatedAt !== project.createdAt && (
            <span>
              Cập nhật: {FormatUtils.formatDate(project.updatedAt ?? "")}
            </span>
          )}
          {/* {project. && (
            <span className="text-blue-600 font-medium">
              Nguồn: {project.store.name}
            </span>
          )} */}
        </div>
      </div>

      {/* Thumbnail */}
      {project.imageUrl && (
        <div className="mb-6">
          <ImageLoader
            src={project.imageUrl}
            alt={project.title}
            height={300}
            width={500}
            className="w-full h-auto rounded-lg shadow-sm"
          />
        </div>
      )}

      {/* Content */}
      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
        <EditorClientWrapper jsonString={project.description} />
      </div>
    </div>
  );
};

export default DuAnSlug;
