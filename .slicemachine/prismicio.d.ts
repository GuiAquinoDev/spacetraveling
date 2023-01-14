// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for posts documents */
interface PostsDocumentData {
    /**
     * title field in *posts*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: posts.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * subtitle field in *posts*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: posts.subtitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle: prismicT.KeyTextField;
    /**
     * author field in *posts*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: posts.author
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    author: prismicT.KeyTextField;
    /**
     * banner field in *posts*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: posts.banner
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner: prismicT.ImageField<never>;
    /**
     * content field in *posts*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: posts.content[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    content: prismicT.GroupField<Simplify<PostsDocumentDataContentItem>>;
}
/**
 * Item in posts → content
 *
 */
export interface PostsDocumentDataContentItem {
    /**
     * heading field in *posts → content*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: posts.content[].heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    heading: prismicT.KeyTextField;
    /**
     * body field in *posts → content*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: posts.content[].body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * posts document from Prismic
 *
 * - **API ID**: `posts`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PostsDocumentData>, "posts", Lang>;
export type AllDocumentTypes = PostsDocument;
/**
 * Primary content in Posts → Primary
 *
 */
interface PostsSliceDefaultPrimary {
    /**
     * Title field in *Posts → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: posts.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Posts → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: posts.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for Posts Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Posts`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PostsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<PostsSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Posts*
 *
 */
type PostsSliceVariation = PostsSliceDefault;
/**
 * Posts Shared Slice
 *
 * - **API ID**: `posts`
 * - **Description**: `Posts`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PostsSlice = prismicT.SharedSlice<"posts", PostsSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { PostsDocumentData, PostsDocumentDataContentItem, PostsDocument, AllDocumentTypes, PostsSliceDefaultPrimary, PostsSliceDefault, PostsSliceVariation, PostsSlice };
    }
}
