import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const directoriesApi = createApi({
  reducerPath: 'directoriesApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3000/',
    credentials: 'include', // This enables sending cookies with requests
    prepareHeaders: (headers, { getState }) => {
      // Add any common headers here
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Directory'], // For cache invalidation
  endpoints: (builder) => ({
    // Get all directories or a specific directory
    fetchDirectory: builder.query({
      query: (id = '') => `directory/${id}`,
      providesTags: ['Directory'],
    }),
     fetchfile: builder.query({
      query: (id = '') => `files/${id}`,
      providesTags: ['Directory'],
    }),

    // Create a new directory
    createDirectory: builder.mutation({
      query: ({ parentId = '', dirName }) => ({
        url: `directory/${parentId}`,
        method: 'POST',
        headers: { dirname: dirName },
      }),
      invalidatesTags: ['Directory'],
    }),

    // Delete a directory
    deleteDirectory: builder.mutation({
      query: (id) => ({
        url: `directory/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Directory'],
    }),

    // Rename a directory
    renameDirectory: builder.mutation({
      query: ({ id, newName }) => ({
        url: `directory/${id}`,
        method: 'PATCH',
        body: { DirName: newName },
      }),
      invalidatesTags: ['Directory'],
    }),

    // Upload file to directory
    uploadFile: builder.mutation({
      async queryFn({ directoryId, file, filename }) {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open("POST", `http://localhost:3000/files/${directoryId || ""}`, true);
          xhr.setRequestHeader("filename", filename);
          xhr.withCredentials = true;

          xhr.upload.addEventListener("progress", (e) => {
            if (e.lengthComputable) {
              console.log(`Progress: ${(e.loaded / e.total) * 100}%`);
            }
          });

          xhr.addEventListener("load", () => {
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve({ data: xhr.responseText });
            } else {
              reject({ error: xhr.responseText });
            }
          });

          xhr.addEventListener("error", () => reject({ error: "Upload failed" }));

          xhr.send(file); // Send raw binary file
        });
      },
      invalidatesTags: ["Directory"],
    }),
  

    // Delete file
    deleteFile: builder.mutation({
      query: (fileId) => ({
        url: `files/${fileId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Directory'],
    }),

    // Rename file
    renameFile: builder.mutation({
      query: ({ fileId, newName }) => ({
        url: `files/${fileId}`,
        method: 'PATCH',
        body: { fileName: newName },
      }),
      invalidatesTags: ['Directory'],
    }),

  openFile: builder.query({
  query: ({ fileId }) => ({
    url: `files/${fileId}`,
    method: 'GET',
    credentials: 'include',
  }),
}),

    // Download file (returns blob)
    downloadFile: builder.query({
      query: ({ fileId }) => ({
        url: `files/${fileId}?action=download`,
        responseHandler: async (response) => {
          const blob = await response.blob();
          return URL.createObjectURL(blob);
        },
      }),
    }),
  })
 })

// Export hooks for usage in components
export const {
  useFetchDirectoryQuery,
  useCreateDirectoryMutation,
  useDeleteDirectoryMutation,
  useRenameDirectoryMutation,
  useUploadFileMutation,
  useDeleteFileMutation,
  useRenameFileMutation,
  useDownloadFileQuery,
  useFetchfileQuery,
  useOpenFileQuery
} = directoriesApi;

// Example usage in components:
/*
function MyComponent() {
  const { data, isLoading } = useFetchDirectoryQuery();
  const [createDirectory] = useCreateDirectoryMutation();
  const [uploadFile] = useUploadFileMutation();

  const handleCreateDir = async () => {
    try {
      await createDirectory({ dirName: 'New Folder' });
    } catch (error) {
      console.error('Failed to create directory:', error);
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    try {
      await uploadFile({ file, filename: file.name });
    } catch (error) {
      console.error('Failed to upload file:', error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.directories.map(dir => (
          <div key={dir._id}>{dir.name}</div>
        ))
      )}
    </div>
  );
}
*/