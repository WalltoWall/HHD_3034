export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  PrismicImageThumbnailsType: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type IdQueryOperatorInput = {
  eq?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImgixUrlParamsInput = {
  /** Specifies an aspect ratio to maintain when resizing and cropping the image. */
  ar?: Maybe<Scalars['String']>;
  /** Applies automatic enhancements to images. [See docs](https://docs.imgix.com/apis/url/auto). */
  auto?: Maybe<Scalars['String']>;
  /**
   * Colors the background of padded and partially-transparent images. Default:
   * `fff`. [See docs](https://docs.imgix.com/apis/url/bg).
   */
  bg?: Maybe<Scalars['String']>;
  /**
   * Changes the blend alignment relative to the parent image. [See
   * docs](https://docs.imgix.com/apis/url/blending/blend-align).
   */
  blendAlign?: Maybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  blendalign?: Maybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  ba?: Maybe<Scalars['String']>;
  /** Changes the alpha of the blend image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/blending/blend-alpha). */
  blendAlpha?: Maybe<Scalars['Int']>;
  /** Alias for `blendAlpha`. */
  blendalpha?: Maybe<Scalars['Int']>;
  /** Alias for `blendAlpha`. */
  balph?: Maybe<Scalars['Int']>;
  /** Specifies a color to use when applying the blend. [See docs](https://docs.imgix.com/apis/url/blending/blend-color). */
  blendColor?: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  blendcolor?: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  blendClr?: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  blendclr?: Maybe<Scalars['String']>;
  /** Specifies the type of crop for blend images. [See docs](https://docs.imgix.com/apis/url/blending/blend-crop). */
  blendCrop?: Maybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  blendcrop?: Maybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  bc?: Maybe<Scalars['String']>;
  /** Specifies the fit mode for blend images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/blending/blend-fit). */
  blendFit?: Maybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  blendfit?: Maybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  bf?: Maybe<Scalars['String']>;
  /** Adjusts the height of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-h). */
  blendH?: Maybe<Scalars['Int']>;
  /** Alias for `blendH`. */
  blendh?: Maybe<Scalars['Int']>;
  /** Alias for `blendH`. */
  bh?: Maybe<Scalars['Int']>;
  /**
   * Sets the blend mode for a blend image. Default: `overlay`. [See
   * docs](https://docs.imgix.com/apis/url/blending/blend-mode).
   */
  blendMode?: Maybe<Scalars['String']>;
  /** Alias for `blendMode`. */
  blendmode?: Maybe<Scalars['String']>;
  /** Alias for `blendMode`. */
  bm?: Maybe<Scalars['String']>;
  /** Applies padding to the blend image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-pad). */
  blendPad?: Maybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  blendpad?: Maybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  bp?: Maybe<Scalars['Int']>;
  /** Adjusts the size of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-size). */
  blendSize?: Maybe<Scalars['String']>;
  /** Alias for `blendSize`. */
  blendsize?: Maybe<Scalars['String']>;
  /** Alias for `blendSize`. */
  bs?: Maybe<Scalars['String']>;
  /** Adjusts the width of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-w). */
  blendW?: Maybe<Scalars['Int']>;
  /** Alias for `blendW`. */
  blendw?: Maybe<Scalars['Int']>;
  /** Alias for `blendW`. */
  bw?: Maybe<Scalars['Int']>;
  /**
   * Adjusts the x-offset of the blend image relative to its parent. Default: `0`.
   * [See docs](https://docs.imgix.com/apis/url/blending/blend-x).
   */
  blendX?: Maybe<Scalars['Int']>;
  /** Alias for `blendX`. */
  blendx?: Maybe<Scalars['Int']>;
  /** Alias for `blendX`. */
  bx?: Maybe<Scalars['Int']>;
  /**
   * Adjusts the y-offset of the blend image relative to its parent. Default: `0`.
   * [See docs](https://docs.imgix.com/apis/url/blending/blend-y).
   */
  blendY?: Maybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  blendy?: Maybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  by?: Maybe<Scalars['Int']>;
  /** Specifies the location of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend). */
  blend?: Maybe<Scalars['String']>;
  /** Alias for `blend`. */
  b?: Maybe<Scalars['String']>;
  /** Applies a gaussian blur to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/blur). */
  blur?: Maybe<Scalars['Int']>;
  /**
   * Sets the inner radius of the image's border in pixels. [See
   * docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner).
   */
  borderRadiusInner?: Maybe<Scalars['String']>;
  /**
   * Sets the outer radius of the image's border in pixels. [See
   * docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius).
   */
  borderRadius?: Maybe<Scalars['String']>;
  /** Applies a border to an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border). */
  border?: Maybe<Scalars['String']>;
  /** Adjusts the brightness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/bri). */
  bri?: Maybe<Scalars['Int']>;
  /** Sets one or more Client-Hints headers. [See docs](https://docs.imgix.com/apis/url/format/ch). */
  ch?: Maybe<Scalars['String']>;
  /**
   * Specifies the output chroma subsampling rate. Default: `420`. [See
   * docs](https://docs.imgix.com/apis/url/format/chromasub).
   */
  chromasub?: Maybe<Scalars['Int']>;
  /** Limits the number of unique colors in an image. [See docs](https://docs.imgix.com/apis/url/format/colorquant). */
  colorquant?: Maybe<Scalars['Int']>;
  /**
   * Specifies how many colors to include in a palette-extraction response.
   * Default: `6`. [See
   * docs](https://docs.imgix.com/apis/url/color-palette/colors).
   */
  colors?: Maybe<Scalars['Int']>;
  /** Adjusts the contrast of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/con). */
  con?: Maybe<Scalars['Int']>;
  /** Specifies the radius value for a rounded corner mask. [See docs](https://docs.imgix.com/apis/url/mask/corner-radius). */
  cornerRadius?: Maybe<Scalars['String']>;
  /** Specifies how to crop an image. [See docs](https://docs.imgix.com/apis/url/size/crop). */
  crop?: Maybe<Scalars['String']>;
  /** Specifies the color space of the output image. [See docs](https://docs.imgix.com/apis/url/format/cs). */
  cs?: Maybe<Scalars['String']>;
  /** Forces a URL to use send-file in its response. [See docs](https://docs.imgix.com/apis/url/format/dl). */
  dl?: Maybe<Scalars['String']>;
  /** Sets the DPI value in the EXIF header. [See docs](https://docs.imgix.com/apis/url/format/dpi). */
  dpi?: Maybe<Scalars['Int']>;
  /** Adjusts the device-pixel ratio of the output image. Default: `1`. [See docs](https://docs.imgix.com/apis/url/dpr). */
  dpr?: Maybe<Scalars['Float']>;
  /**
   * Changes the alpha of the duotone effect atop the source image. Default: `100`.
   * [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha).
   */
  duotoneAlpha?: Maybe<Scalars['Int']>;
  /** Applies a duotone effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/duotone). */
  duotone?: Maybe<Scalars['String']>;
  /** Adjusts the exposure of the output image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/exp). */
  exp?: Maybe<Scalars['Int']>;
  /**
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that
   * time will output a 404 status code. [See
   * docs](https://docs.imgix.com/apis/url/expires).
   */
  expires?: Maybe<Scalars['String']>;
  /** Selects a face to crop to. [See docs](https://docs.imgix.com/apis/url/face-detection/faceindex). */
  faceindex?: Maybe<Scalars['Int']>;
  /** Adjusts padding around a selected face. Default: `1`. [See docs](https://docs.imgix.com/apis/url/face-detection/facepad). */
  facepad?: Maybe<Scalars['Float']>;
  /**
   * Specifies that face data should be included in output when combined with
   * `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces).
   */
  faces?: Maybe<Scalars['Int']>;
  /**
   * Sets the fill color for images with additional space created by the fit
   * setting. Default: `fff`. [See
   * docs](https://docs.imgix.com/apis/url/fill/fill-color).
   */
  fillColor?: Maybe<Scalars['String']>;
  /** Alias for `fillColor`. */
  fillcolor?: Maybe<Scalars['String']>;
  /**
   * Determines how to fill in additional space created by the fit setting. [See
   * docs](https://docs.imgix.com/apis/url/fill/fill).
   */
  fill?: Maybe<Scalars['String']>;
  /**
   * Specifies how to map the source image to the output image dimensions. Default:
   * `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit).
   */
  fit?: Maybe<Scalars['String']>;
  /** Alias for `fit`. */
  f?: Maybe<Scalars['String']>;
  /** Flips an image on a specified axis. [See docs](https://docs.imgix.com/apis/url/rotation/flip). */
  flip?: Maybe<Scalars['String']>;
  /** Changes the format of the output image. [See docs](https://docs.imgix.com/apis/url/format/fm). */
  fm?: Maybe<Scalars['String']>;
  /**
   * Displays crosshairs identifying the location of the set focal point. Default:
   * `false`. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug).
   */
  fpDebug?: Maybe<Scalars['Boolean']>;
  /**
   * Sets the relative horizontal value for the focal point of an image. [See
   * docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x).
   */
  fpX?: Maybe<Scalars['Int']>;
  /**
   * Sets the relative vertical value for the focal point of an image. [See
   * docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y).
   */
  fpY?: Maybe<Scalars['Int']>;
  /**
   * Sets the relative zoom value for the focal point of an image. [See
   * docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z).
   */
  fpZ?: Maybe<Scalars['Int']>;
  /** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
  gam?: Maybe<Scalars['Int']>;
  /** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
  h?: Maybe<Scalars['Int']>;
  /** Alias for `h`. */
  height?: Maybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/high). */
  high?: Maybe<Scalars['Int']>;
  /** Applies a half-tone effect to the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/htn). */
  htn?: Maybe<Scalars['Int']>;
  /** Adjusts the hue of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/hue). */
  hue?: Maybe<Scalars['Int']>;
  /** Inverts the colors on the source image. Default: `false`. [See docs](https://docs.imgix.com/apis/url/adjustment/invert). */
  invert?: Maybe<Scalars['Boolean']>;
  /** Alias for `invert`. */
  inv?: Maybe<Scalars['Boolean']>;
  /**
   * Specifies that the output image should be a lossless variant. Default:
   * `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless).
   */
  lossless?: Maybe<Scalars['Boolean']>;
  /**
   * Changes the watermark alignment relative to the parent image. [See
   * docs](https://docs.imgix.com/apis/url/watermark/mark-align).
   */
  markAlign?: Maybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  ma?: Maybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  markalign?: Maybe<Scalars['String']>;
  /**
   * Changes the alpha of the watermark image. Default: `100`. [See
   * docs](https://docs.imgix.com/apis/url/watermark/mark-alpha).
   */
  markAlpha?: Maybe<Scalars['Int']>;
  /** Alias for `markAlpha`. */
  markalpha?: Maybe<Scalars['Int']>;
  /** Alias for `markAlpha`. */
  malph?: Maybe<Scalars['Int']>;
  /** Changes base URL of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-base). */
  markBase?: Maybe<Scalars['String']>;
  /** Alias for `markBase`. */
  mb?: Maybe<Scalars['String']>;
  /** Alias for `markBase`. */
  markbase?: Maybe<Scalars['String']>;
  /**
   * Specifies the fit mode for watermark images. Default: `clip`. [See
   * docs](https://docs.imgix.com/apis/url/watermark/mark-fit).
   */
  markFit?: Maybe<Scalars['String']>;
  /** Alias for `markFit`. */
  mf?: Maybe<Scalars['String']>;
  /** Alias for `markFit`. */
  markfit?: Maybe<Scalars['String']>;
  /** Adjusts the height of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-h). */
  markH?: Maybe<Scalars['Int']>;
  /** Alias for `markH`. */
  mh?: Maybe<Scalars['Int']>;
  /** Alias for `markH`. */
  markh?: Maybe<Scalars['Int']>;
  /** Applies padding to the watermark image. Default: `10`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-pad). */
  markPad?: Maybe<Scalars['Int']>;
  /** Alias for `markPad`. */
  mp?: Maybe<Scalars['Int']>;
  /** Alias for `markPad`. */
  markpad?: Maybe<Scalars['Int']>;
  /** Adjusts the scale of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-scale). */
  markScale?: Maybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  ms?: Maybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  markscale?: Maybe<Scalars['Int']>;
  /** Adjusts the width of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-w). */
  markW?: Maybe<Scalars['Int']>;
  /** Alias for `markW`. */
  mw?: Maybe<Scalars['Int']>;
  /** Alias for `markW`. */
  markw?: Maybe<Scalars['Int']>;
  /**
   * Adjusts the x-offset of the watermark image relative to its parent. [See
   * docs](https://docs.imgix.com/apis/url/watermark/mark-x).
   */
  markX?: Maybe<Scalars['Int']>;
  /** Alias for `markX`. */
  mx?: Maybe<Scalars['Int']>;
  /** Alias for `markX`. */
  markx?: Maybe<Scalars['Int']>;
  /**
   * Adjusts the y-offset of the watermark image relative to its parent. [See
   * docs](https://docs.imgix.com/apis/url/watermark/mark-y).
   */
  markY?: Maybe<Scalars['Int']>;
  /** Alias for `markY`. */
  my?: Maybe<Scalars['Int']>;
  /** Alias for `markY`. */
  marky?: Maybe<Scalars['Int']>;
  /** Specifies the location of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark). */
  mark?: Maybe<Scalars['String']>;
  /** Alias for `mark`. */
  m?: Maybe<Scalars['String']>;
  /** Defines the type of mask and specifies the URL if that type is selected. [See docs](https://docs.imgix.com/apis/url/mask). */
  mask?: Maybe<Scalars['String']>;
  /**
   * Colors the background of the transparent mask area of images. Default: `fff`.
   * [See docs](https://docs.imgix.com/apis/url/mask/mask-bg).
   */
  maskbg?: Maybe<Scalars['String']>;
  /** Specifies the maximum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-height). */
  maxH?: Maybe<Scalars['Int']>;
  /** Alias for `maxH`. */
  maxHeight?: Maybe<Scalars['Int']>;
  /** Specifies the maximum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-width). */
  maxW?: Maybe<Scalars['Int']>;
  /** Alias for `maxW`. */
  maxWidth?: Maybe<Scalars['Int']>;
  /** Specifies the minimum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-height). */
  minH?: Maybe<Scalars['Int']>;
  /** Alias for `minH`. */
  minHeight?: Maybe<Scalars['Int']>;
  /** Specifies the minimum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-width). */
  minW?: Maybe<Scalars['Int']>;
  /** Alias for `minW`. */
  minWidth?: Maybe<Scalars['Int']>;
  /** Applies a monochrome effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/monochrome). */
  monochrome?: Maybe<Scalars['String']>;
  /** Alias for `monochrome`. */
  mono?: Maybe<Scalars['String']>;
  /** Reduces the noise in an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nr). */
  nr?: Maybe<Scalars['Int']>;
  /**
   * Provides a threshold by which to sharpen an image. Default: `20`. [See
   * docs](https://docs.imgix.com/apis/url/noise-reduction/nrs).
   */
  nrs?: Maybe<Scalars['Int']>;
  /** Changes the image orientation. [See docs](https://docs.imgix.com/apis/url/rotation/orient). */
  orient?: Maybe<Scalars['Int']>;
  /** Alias for `orient`. */
  or?: Maybe<Scalars['Int']>;
  /** Pads an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad). */
  pad?: Maybe<Scalars['Int']>;
  /** Selects a page from a PDF for display. Default: `1`. [See docs](https://docs.imgix.com/apis/url/pdf-page-number). */
  page?: Maybe<Scalars['Int']>;
  /** Specifies an output format for palette-extraction. [See docs](https://docs.imgix.com/apis/url/color-palette/palette). */
  palette?: Maybe<Scalars['String']>;
  /**
   * Specifies a CSS prefix for all classes in palette-extraction. Default:
   * `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix).
   */
  prefix?: Maybe<Scalars['String']>;
  /** Applies a pixelation effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/px). */
  px?: Maybe<Scalars['Int']>;
  /** Adjusts the quality of an output image. Default: `75`. [See docs](https://docs.imgix.com/apis/url/format/q). */
  q?: Maybe<Scalars['Int']>;
  /** Crops an image to a specified rectangle. [See docs](https://docs.imgix.com/apis/url/size/rect). */
  rect?: Maybe<Scalars['String']>;
  /** Rotates an image by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/rotation/rot). */
  rot?: Maybe<Scalars['Float']>;
  /** Adjusts the saturation of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sat). */
  sat?: Maybe<Scalars['Int']>;
  /** Applies a sepia effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/sepia). */
  sepia?: Maybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/shad). */
  shad?: Maybe<Scalars['Float']>;
  /** Adjusts the sharpness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sharp). */
  sharp?: Maybe<Scalars['Float']>;
  /** Specifies a trim color on a trim operation. [See docs](https://docs.imgix.com/apis/url/trim/trim-color). */
  trimColor?: Maybe<Scalars['String']>;
  /** Alias for `trimColor`. */
  trimcolor?: Maybe<Scalars['String']>;
  /**
   * Specifies the mean difference on a trim operation. Default: `11`. [See
   * docs](https://docs.imgix.com/apis/url/trim/trim-md).
   */
  trimMd?: Maybe<Scalars['Float']>;
  /** Alias for `trimMd`. */
  trimmd?: Maybe<Scalars['Float']>;
  /**
   * Pads the area of the source image before trimming. Default: `0`. [See
   * docs](https://docs.imgix.com/apis/url/trim/trim-pad).
   */
  trimPad?: Maybe<Scalars['Int']>;
  /** Alias for `trimPad`. */
  trimpad?: Maybe<Scalars['Int']>;
  /**
   * Specifies the standard deviation on a trim operation. Default: `10`. [See
   * docs](https://docs.imgix.com/apis/url/trim/trim-sd).
   */
  trimSd?: Maybe<Scalars['Float']>;
  /** Alias for `trimSd`. */
  trimsd?: Maybe<Scalars['Float']>;
  /** Specifies the tolerance on a trim operation. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-tol). */
  trimTol?: Maybe<Scalars['Float']>;
  /** Alias for `trimTol`. */
  trimtol?: Maybe<Scalars['Float']>;
  /** Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim). */
  trim?: Maybe<Scalars['String']>;
  /**
   * Sets the vertical and horizontal alignment of rendered text relative to the
   * base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align).
   */
  txtAlign?: Maybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  txtalign?: Maybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  ta?: Maybe<Scalars['String']>;
  /** Sets the clipping properties of rendered text. Default: `end`. [See docs](https://docs.imgix.com/apis/url/text/txt-clip). */
  txtClip?: Maybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  txtclip?: Maybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  tcl?: Maybe<Scalars['String']>;
  /** Specifies the color of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-color). */
  txtColor?: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtcolor?: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtClr?: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtclr?: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  tc?: Maybe<Scalars['String']>;
  /** Specifies the fit approach for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-fit). */
  txtFit?: Maybe<Scalars['String']>;
  /** Alias for `txtFit`. */
  txtfit?: Maybe<Scalars['String']>;
  /** Selects a font for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-font). */
  txtFont?: Maybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  tf?: Maybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  txtfont?: Maybe<Scalars['String']>;
  /**
   * Sets the leading (line spacing) for rendered text. Only works on the
   * multi-line text endpoint. Default: `0`. [See
   * docs](https://docs.imgix.com/apis/url/typesetting/txt-lead).
   */
  txtLead?: Maybe<Scalars['Int']>;
  /** Alias for `txtLead`. */
  txtlead?: Maybe<Scalars['Int']>;
  /** Controls the level of ligature substitution. [See docs](https://docs.imgix.com/apis/url/text/txt-lig). */
  txtLig?: Maybe<Scalars['Int']>;
  /** Alias for `txtLig`. */
  txtlig?: Maybe<Scalars['Int']>;
  /** Specifies a text outline color. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/text/txt-line-color). */
  txtLineColor?: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  txtlinecolor?: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  txtLineClr?: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  txtlineclr?: Maybe<Scalars['String']>;
  /**
   * Outlines the rendered text with a specified color. Default: `0`. [See
   * docs](https://docs.imgix.com/apis/url/text/txt-line).
   */
  txtLine?: Maybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  txtline?: Maybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  tl?: Maybe<Scalars['Int']>;
  /**
   * Specifies the padding (in device-independent pixels) between a textbox and the
   * edges of the base image. [See
   * docs](https://docs.imgix.com/apis/url/text/txt-pad).
   */
  txtPad?: Maybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  txtpad?: Maybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  tp?: Maybe<Scalars['Int']>;
  /** Applies a shadow to rendered text. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-shad). */
  txtShad?: Maybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  txtshad?: Maybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  tsh?: Maybe<Scalars['Float']>;
  /** Sets the font size of rendered text. Default: `12`. [See docs](https://docs.imgix.com/apis/url/text/txt-size). */
  txtSize?: Maybe<Scalars['Int']>;
  /** Alias for `txtSize`. */
  tsz?: Maybe<Scalars['Int']>;
  /** Alias for `txtSize`. */
  txtsize?: Maybe<Scalars['Int']>;
  /**
   * Sets the tracking (letter spacing) for rendered text. Only works on the
   * multi-line text endpoint. Default: `0`. [See
   * docs](https://docs.imgix.com/apis/url/typesetting/txt-track).
   */
  txtTrack?: Maybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  txttrack?: Maybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  tt?: Maybe<Scalars['Int']>;
  /** Sets the width of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-width). */
  txtWidth?: Maybe<Scalars['Int']>;
  /** Alias for `txtWidth`. */
  txtwidth?: Maybe<Scalars['Int']>;
  /** Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt). */
  txt?: Maybe<Scalars['String']>;
  /** Alias for `txt`. */
  t?: Maybe<Scalars['String']>;
  /** Sharpens the source image using an unsharp mask. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/usm). */
  usm?: Maybe<Scalars['Int']>;
  /**
   * Specifies the radius for an unsharp mask operation. Default: `2.5`. [See
   * docs](https://docs.imgix.com/apis/url/adjustment/usmrad).
   */
  usmrad?: Maybe<Scalars['Float']>;
  /** Adjusts the vibrance of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/vib). */
  vib?: Maybe<Scalars['Int']>;
  /** Adjusts the width of the output image. [See docs](https://docs.imgix.com/apis/url/size/w). */
  w?: Maybe<Scalars['Int']>;
  /** Alias for `w`. */
  width?: Maybe<Scalars['Int']>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type PrismicAllDocumentTypes = PrismicLocation | PrismicNavigation | PrismicPage | PrismicProduct | PrismicSettings;

export type PrismicDocument = {
  /** The document's data object without transformations exactly as it comes from the Prismic API. */
  dataRaw: Scalars['JSON'];
  /**
   * The document's data object without transformations. The object is stringified
   * via `JSON.stringify` to eliminate the need to declare subfields.
   * @deprecated Use `dataRaw` instead which returns JSON.
   */
  dataString?: Maybe<Scalars['String']>;
  /** The document's initial publication date. */
  first_publication_date?: Maybe<Scalars['Date']>;
  /** The document's Prismic API URL. */
  href?: Maybe<Scalars['String']>;
  /** The document's URL derived via the link resolver. */
  url?: Maybe<Scalars['String']>;
  /** Globally unique identifier. Note that this differs from the `prismicID` field. */
  id: Scalars['ID'];
  /** The document's language. */
  lang: Scalars['String'];
  /** The document's most recent publication date */
  last_publication_date?: Maybe<Scalars['Date']>;
  /** The document's list of tags. */
  tags: Array<Scalars['String']>;
  /** Alternate languages for the document. */
  alternate_languages: Array<PrismicLinkType>;
  /** The document's Prismic API ID type. */
  type: Scalars['String'];
  /** The document's Prismic ID. */
  prismicId: Scalars['ID'];
  /**
   * Marks the document as previewable using Prismic's preview system. Include this
   * field if updates to the document should be previewable by content editors
   * before publishing. **Note: the value of this field is not stable and should
   * not be used directly**.
   */
  _previewable: Scalars['ID'];
};


export type PrismicDocumentFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicDocumentLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Embed videos, songs, tweets, slices, etc. */
export type PrismicEmbedType = {
  /** The ID of the resource author. Fetched via oEmbed data. */
  author_id?: Maybe<Scalars['ID']>;
  /** The name of the author/owner of the resource. Fetched via oEmbed data. */
  author_name?: Maybe<Scalars['String']>;
  /** A URL for the author/owner of the resource. Fetched via oEmbed data. */
  author_url?: Maybe<Scalars['String']>;
  /**
   * The suggested cache lifetime for this resource, in seconds. Consumers may
   * choose to use this value or not. Fetched via oEmbed data.
   */
  cache_age?: Maybe<Scalars['String']>;
  /** The URL of the resource. */
  embed_url?: Maybe<Scalars['String']>;
  /**
   * The HTML required to display the resource. The HTML should have no padding or
   * margins. Consumers may wish to load the HTML in an off-domain iframe to avoid
   * XSS vulnerabilities. Fetched via oEmbed data.
   */
  html?: Maybe<Scalars['String']>;
  /** The name of the resource. */
  name?: Maybe<Scalars['String']>;
  /** The name of the resource provider. Fetched via oEmbed data. */
  provider_name?: Maybe<Scalars['String']>;
  /** The URL of the resource provider. Fetched via oEmbed data. */
  provider_url?: Maybe<Scalars['String']>;
  /** The width of the resource's thumbnail. Fetched via oEmbed data. */
  thumbnail_height?: Maybe<Scalars['Int']>;
  /** A URL to a thumbnail image representing the resource. Fetched via oEmbed data. */
  thumbnail_url?: Maybe<Scalars['String']>;
  /** The width of the resource's thumbnail. Fetched via oEmbed data. */
  thumbnail_width?: Maybe<Scalars['Int']>;
  /** A text title, describing the resource. Fetched via oEmbed data. */
  title?: Maybe<Scalars['String']>;
  /** The resource type. Fetched via oEmbed data. */
  type?: Maybe<Scalars['String']>;
  /** The oEmbed version number. */
  version?: Maybe<Scalars['String']>;
  /** The source URL of the resource. Fetched via oEmbed data. */
  url?: Maybe<Scalars['String']>;
  /** The width in pixel of the resource. Fetched via oEmbed data. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixel of the resource. Fetched via oEmbed data. */
  height?: Maybe<Scalars['Int']>;
  /** The ID of the resource media. Fetched via oEmbed data. */
  media_id?: Maybe<Scalars['ID']>;
  /** A description for the resource. */
  description?: Maybe<Scalars['String']>;
};

/** A field for storing geo-coordinates. */
export type PrismicGeoPointType = {
  /** The latitude value of the geo-coordinate. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude value of the geo-coordinate. */
  longitude?: Maybe<Scalars['Float']>;
};

/** Dimensions for images. */
export type PrismicImageDimensionsType = {
  /** Width of the image in pixels. */
  width: Scalars['Int'];
  /** Height of the image in pixels. */
  height: Scalars['Int'];
};

export type PrismicImageDimensionsTypeFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicImageFixedType = {
  base64: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Scalars['String'];
  srcSetWebp: Scalars['String'];
  sizes: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export type PrismicImageFixedTypeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicImageFluidType = {
  base64: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Scalars['String'];
  srcSetWebp: Scalars['String'];
  sizes: Scalars['String'];
  aspectRatio: Scalars['Float'];
};

export type PrismicImageFluidTypeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type PrismicImageInterface = {
  /** The image's alternative text. */
  alt?: Maybe<Scalars['String']>;
  /** The image's copyright text. */
  copyright?: Maybe<Scalars['String']>;
  /** The image's dimensions. */
  dimensions?: Maybe<PrismicImageDimensionsType>;
  /** The image's URL on Prismic's CDN. */
  url?: Maybe<Scalars['String']>;
  /** The locally downloaded image if `shouldNormalizeImage` returns true. */
  localFile?: Maybe<File>;
  fixed?: Maybe<PrismicImageFixedType>;
  fluid?: Maybe<PrismicImageFluidType>;
};


export type PrismicImageThumbnailsTypeQueryOperatorInput = {
  eq?: Maybe<Scalars['PrismicImageThumbnailsType']>;
  ne?: Maybe<Scalars['PrismicImageThumbnailsType']>;
  in?: Maybe<Array<Maybe<Scalars['PrismicImageThumbnailsType']>>>;
  nin?: Maybe<Array<Maybe<Scalars['PrismicImageThumbnailsType']>>>;
};

/** An image thumbnail with constraints. */
export type PrismicImageThumbnailType = PrismicImageInterface & {
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  url?: Maybe<Scalars['String']>;
  fixed?: Maybe<PrismicImageFixedType>;
  fluid?: Maybe<PrismicImageFluidType>;
  localFile?: Maybe<File>;
};


/** An image thumbnail with constraints. */
export type PrismicImageThumbnailTypeUrlArgs = {
  imgixParams?: Maybe<ImgixUrlParamsInput>;
};


/** An image thumbnail with constraints. */
export type PrismicImageThumbnailTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};


/** An image thumbnail with constraints. */
export type PrismicImageThumbnailTypeFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};

/** An image field with optional constrained thumbnails. */
export type PrismicImageType = PrismicImageInterface & {
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  url?: Maybe<Scalars['String']>;
  fixed?: Maybe<PrismicImageFixedType>;
  fluid?: Maybe<PrismicImageFluidType>;
  localFile?: Maybe<File>;
  thumbnails?: Maybe<Scalars['PrismicImageThumbnailsType']>;
};


/** An image field with optional constrained thumbnails. */
export type PrismicImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixUrlParamsInput>;
};


/** An image field with optional constrained thumbnails. */
export type PrismicImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};


/** An image field with optional constrained thumbnails. */
export type PrismicImageTypeFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};

export type PrismicImageTypeFilterInput = {
  alt?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  dimensions?: Maybe<PrismicImageDimensionsTypeFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<PrismicImageFixedTypeFilterInput>;
  fluid?: Maybe<PrismicImageFluidTypeFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  thumbnails?: Maybe<PrismicImageThumbnailsTypeQueryOperatorInput>;
};

/** Link to web, media, and internal content. */
export type PrismicLinkType = {
  /** The type of link. */
  link_type: PrismicLinkTypes;
  /** If a Document link, `true` if linked document does not exist, `false` otherwise. */
  isBroken?: Maybe<Scalars['Boolean']>;
  /** The document's URL derived via the link resolver. */
  url?: Maybe<Scalars['String']>;
  /** The link's target. */
  target?: Maybe<Scalars['String']>;
  /** If a Media link, the size of the file. */
  size?: Maybe<Scalars['Int']>;
  /** If a Document link, the linked document's Prismic ID. */
  id?: Maybe<Scalars['ID']>;
  /** If a Document link, the linked document's Prismic custom type API ID */
  type?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's list of tags. */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** If a Document link, the linked document's language. */
  lang?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's slug. */
  slug?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's UID. */
  uid?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document. */
  document?: Maybe<PrismicAllDocumentTypes>;
  /** The field's value without transformations exactly as it comes from the Prismic API. */
  raw?: Maybe<Scalars['JSON']>;
};

export type PrismicLinkTypeFilterInput = {
  link_type?: Maybe<PrismicLinkTypesQueryOperatorInput>;
  isBroken?: Maybe<BooleanQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<IdQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<JsonQueryOperatorInput>;
};

export type PrismicLinkTypeFilterListInput = {
  elemMatch?: Maybe<PrismicLinkTypeFilterInput>;
};

/** Types of links. */
export enum PrismicLinkTypes {
  /** Any of the other types */
  Any = 'Any',
  /** Internal content */
  Document = 'Document',
  /** Internal media content */
  Media = 'Media',
  /** URL */
  Web = 'Web'
}

export type PrismicLinkTypesQueryOperatorInput = {
  eq?: Maybe<PrismicLinkTypes>;
  ne?: Maybe<PrismicLinkTypes>;
  in?: Maybe<Array<Maybe<PrismicLinkTypes>>>;
  nin?: Maybe<Array<Maybe<PrismicLinkTypes>>>;
};

export type PrismicLocation = PrismicDocument & Node & {
  data?: Maybe<PrismicLocationDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  _previewable: Scalars['ID'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicLocationFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicLocationLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicLocationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicLocationEdge>;
  nodes: Array<PrismicLocation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicLocationGroupConnection>;
};


export type PrismicLocationConnectionDistinctArgs = {
  field: PrismicLocationFieldsEnum;
};


export type PrismicLocationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicLocationFieldsEnum;
};

export type PrismicLocationDataType = {
  title?: Maybe<PrismicStructuredTextType>;
  address?: Maybe<PrismicStructuredTextType>;
  address_link?: Maybe<PrismicLinkType>;
  phone_number?: Maybe<PrismicStructuredTextType>;
  email_address?: Maybe<PrismicStructuredTextType>;
  hours?: Maybe<PrismicStructuredTextType>;
  jobs_link?: Maybe<PrismicLinkType>;
  image?: Maybe<PrismicImageType>;
};

export type PrismicLocationDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  address?: Maybe<PrismicStructuredTextTypeFilterInput>;
  address_link?: Maybe<PrismicLinkTypeFilterInput>;
  phone_number?: Maybe<PrismicStructuredTextTypeFilterInput>;
  email_address?: Maybe<PrismicStructuredTextTypeFilterInput>;
  hours?: Maybe<PrismicStructuredTextTypeFilterInput>;
  jobs_link?: Maybe<PrismicLinkTypeFilterInput>;
  image?: Maybe<PrismicImageTypeFilterInput>;
};

export type PrismicLocationEdge = {
  next?: Maybe<PrismicLocation>;
  node: PrismicLocation;
  previous?: Maybe<PrismicLocation>;
};

export enum PrismicLocationFieldsEnum {
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataAddressHtml = 'data___address___html',
  DataAddressText = 'data___address___text',
  DataAddressRaw = 'data___address___raw',
  DataAddressLinkLinkType = 'data___address_link___link_type',
  DataAddressLinkIsBroken = 'data___address_link___isBroken',
  DataAddressLinkUrl = 'data___address_link___url',
  DataAddressLinkTarget = 'data___address_link___target',
  DataAddressLinkSize = 'data___address_link___size',
  DataAddressLinkId = 'data___address_link___id',
  DataAddressLinkType = 'data___address_link___type',
  DataAddressLinkTags = 'data___address_link___tags',
  DataAddressLinkLang = 'data___address_link___lang',
  DataAddressLinkSlug = 'data___address_link___slug',
  DataAddressLinkUid = 'data___address_link___uid',
  DataAddressLinkRaw = 'data___address_link___raw',
  DataPhoneNumberHtml = 'data___phone_number___html',
  DataPhoneNumberText = 'data___phone_number___text',
  DataPhoneNumberRaw = 'data___phone_number___raw',
  DataEmailAddressHtml = 'data___email_address___html',
  DataEmailAddressText = 'data___email_address___text',
  DataEmailAddressRaw = 'data___email_address___raw',
  DataHoursHtml = 'data___hours___html',
  DataHoursText = 'data___hours___text',
  DataHoursRaw = 'data___hours___raw',
  DataJobsLinkLinkType = 'data___jobs_link___link_type',
  DataJobsLinkIsBroken = 'data___jobs_link___isBroken',
  DataJobsLinkUrl = 'data___jobs_link___url',
  DataJobsLinkTarget = 'data___jobs_link___target',
  DataJobsLinkSize = 'data___jobs_link___size',
  DataJobsLinkId = 'data___jobs_link___id',
  DataJobsLinkType = 'data___jobs_link___type',
  DataJobsLinkTags = 'data___jobs_link___tags',
  DataJobsLinkLang = 'data___jobs_link___lang',
  DataJobsLinkSlug = 'data___jobs_link___slug',
  DataJobsLinkUid = 'data___jobs_link___uid',
  DataJobsLinkRaw = 'data___jobs_link___raw',
  DataImageAlt = 'data___image___alt',
  DataImageCopyright = 'data___image___copyright',
  DataImageDimensionsWidth = 'data___image___dimensions___width',
  DataImageDimensionsHeight = 'data___image___dimensions___height',
  DataImageUrl = 'data___image___url',
  DataImageFixedBase64 = 'data___image___fixed___base64',
  DataImageFixedSrc = 'data___image___fixed___src',
  DataImageFixedSrcSet = 'data___image___fixed___srcSet',
  DataImageFixedSrcWebp = 'data___image___fixed___srcWebp',
  DataImageFixedSrcSetWebp = 'data___image___fixed___srcSetWebp',
  DataImageFixedSizes = 'data___image___fixed___sizes',
  DataImageFixedWidth = 'data___image___fixed___width',
  DataImageFixedHeight = 'data___image___fixed___height',
  DataImageFluidBase64 = 'data___image___fluid___base64',
  DataImageFluidSrc = 'data___image___fluid___src',
  DataImageFluidSrcSet = 'data___image___fluid___srcSet',
  DataImageFluidSrcWebp = 'data___image___fluid___srcWebp',
  DataImageFluidSrcSetWebp = 'data___image___fluid___srcSetWebp',
  DataImageFluidSizes = 'data___image___fluid___sizes',
  DataImageFluidAspectRatio = 'data___image___fluid___aspectRatio',
  DataImageLocalFileSourceInstanceName = 'data___image___localFile___sourceInstanceName',
  DataImageLocalFileAbsolutePath = 'data___image___localFile___absolutePath',
  DataImageLocalFileRelativePath = 'data___image___localFile___relativePath',
  DataImageLocalFileExtension = 'data___image___localFile___extension',
  DataImageLocalFileSize = 'data___image___localFile___size',
  DataImageLocalFilePrettySize = 'data___image___localFile___prettySize',
  DataImageLocalFileModifiedTime = 'data___image___localFile___modifiedTime',
  DataImageLocalFileAccessTime = 'data___image___localFile___accessTime',
  DataImageLocalFileChangeTime = 'data___image___localFile___changeTime',
  DataImageLocalFileBirthTime = 'data___image___localFile___birthTime',
  DataImageLocalFileRoot = 'data___image___localFile___root',
  DataImageLocalFileDir = 'data___image___localFile___dir',
  DataImageLocalFileBase = 'data___image___localFile___base',
  DataImageLocalFileExt = 'data___image___localFile___ext',
  DataImageLocalFileName = 'data___image___localFile___name',
  DataImageLocalFileRelativeDirectory = 'data___image___localFile___relativeDirectory',
  DataImageLocalFileDev = 'data___image___localFile___dev',
  DataImageLocalFileMode = 'data___image___localFile___mode',
  DataImageLocalFileNlink = 'data___image___localFile___nlink',
  DataImageLocalFileUid = 'data___image___localFile___uid',
  DataImageLocalFileGid = 'data___image___localFile___gid',
  DataImageLocalFileRdev = 'data___image___localFile___rdev',
  DataImageLocalFileIno = 'data___image___localFile___ino',
  DataImageLocalFileAtimeMs = 'data___image___localFile___atimeMs',
  DataImageLocalFileMtimeMs = 'data___image___localFile___mtimeMs',
  DataImageLocalFileCtimeMs = 'data___image___localFile___ctimeMs',
  DataImageLocalFileAtime = 'data___image___localFile___atime',
  DataImageLocalFileMtime = 'data___image___localFile___mtime',
  DataImageLocalFileCtime = 'data___image___localFile___ctime',
  DataImageLocalFileBirthtime = 'data___image___localFile___birthtime',
  DataImageLocalFileBirthtimeMs = 'data___image___localFile___birthtimeMs',
  DataImageLocalFileBlksize = 'data___image___localFile___blksize',
  DataImageLocalFileBlocks = 'data___image___localFile___blocks',
  DataImageLocalFilePublicUrl = 'data___image___localFile___publicURL',
  DataImageLocalFileId = 'data___image___localFile___id',
  DataImageLocalFileChildren = 'data___image___localFile___children',
  DataImageThumbnails = 'data___image___thumbnails',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicLocationFilterInput = {
  data?: Maybe<PrismicLocationDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicLocationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicLocationEdge>;
  nodes: Array<PrismicLocation>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicLocationSortInput = {
  fields?: Maybe<Array<Maybe<PrismicLocationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicNavigation = PrismicDocument & Node & {
  data?: Maybe<PrismicNavigationDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  _previewable: Scalars['ID'];
  uid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicNavigationFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicNavigationLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicNavigationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNavigationEdge>;
  nodes: Array<PrismicNavigation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicNavigationGroupConnection>;
};


export type PrismicNavigationConnectionDistinctArgs = {
  field: PrismicNavigationFieldsEnum;
};


export type PrismicNavigationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicNavigationFieldsEnum;
};

export type PrismicNavigationDataType = {
  title?: Maybe<PrismicStructuredTextType>;
  main?: Maybe<Array<Maybe<PrismicNavigationMainSlicesType>>>;
};

export type PrismicNavigationDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicNavigationEdge = {
  next?: Maybe<PrismicNavigation>;
  node: PrismicNavigation;
  previous?: Maybe<PrismicNavigation>;
};

export enum PrismicNavigationFieldsEnum {
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Uid = 'uid',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicNavigationFilterInput = {
  data?: Maybe<PrismicNavigationDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicNavigationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNavigationEdge>;
  nodes: Array<PrismicNavigation>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicNavigationMainNavItem = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicNavigationMainNavItemPrimaryType>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicNavigationMainNavItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNavigationMainNavItemEdge>;
  nodes: Array<PrismicNavigationMainNavItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicNavigationMainNavItemGroupConnection>;
};


export type PrismicNavigationMainNavItemConnectionDistinctArgs = {
  field: PrismicNavigationMainNavItemFieldsEnum;
};


export type PrismicNavigationMainNavItemConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicNavigationMainNavItemFieldsEnum;
};

export type PrismicNavigationMainNavItemEdge = {
  next?: Maybe<PrismicNavigationMainNavItem>;
  node: PrismicNavigationMainNavItem;
  previous?: Maybe<PrismicNavigationMainNavItem>;
};

export enum PrismicNavigationMainNavItemFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryName = 'primary___name',
  PrimaryLinkLinkType = 'primary___link___link_type',
  PrimaryLinkIsBroken = 'primary___link___isBroken',
  PrimaryLinkUrl = 'primary___link___url',
  PrimaryLinkTarget = 'primary___link___target',
  PrimaryLinkSize = 'primary___link___size',
  PrimaryLinkId = 'primary___link___id',
  PrimaryLinkType = 'primary___link___type',
  PrimaryLinkTags = 'primary___link___tags',
  PrimaryLinkLang = 'primary___link___lang',
  PrimaryLinkSlug = 'primary___link___slug',
  PrimaryLinkUid = 'primary___link___uid',
  PrimaryLinkRaw = 'primary___link___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicNavigationMainNavItemFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicNavigationMainNavItemPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicNavigationMainNavItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNavigationMainNavItemEdge>;
  nodes: Array<PrismicNavigationMainNavItem>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicNavigationMainNavItemPrimaryType = {
  name?: Maybe<Scalars['String']>;
  link?: Maybe<PrismicLinkType>;
};

export type PrismicNavigationMainNavItemPrimaryTypeFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicNavigationMainNavItemSortInput = {
  fields?: Maybe<Array<Maybe<PrismicNavigationMainNavItemFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicNavigationMainSlicesType = PrismicNavigationMainNavItem;

export type PrismicNavigationSortInput = {
  fields?: Maybe<Array<Maybe<PrismicNavigationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicPage = PrismicDocument & Node & {
  data?: Maybe<PrismicPageDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  _previewable: Scalars['ID'];
  uid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicPageFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicPageLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicPageBodyAboutHankS = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicPageBodyAboutHankSPrimaryType>;
  items?: Maybe<Array<Maybe<PrismicPageBodyAboutHankSItemType>>>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicPageBodyAboutHankSConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyAboutHankSEdge>;
  nodes: Array<PrismicPageBodyAboutHankS>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicPageBodyAboutHankSGroupConnection>;
};


export type PrismicPageBodyAboutHankSConnectionDistinctArgs = {
  field: PrismicPageBodyAboutHankSFieldsEnum;
};


export type PrismicPageBodyAboutHankSConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicPageBodyAboutHankSFieldsEnum;
};

export type PrismicPageBodyAboutHankSEdge = {
  next?: Maybe<PrismicPageBodyAboutHankS>;
  node: PrismicPageBodyAboutHankS;
  previous?: Maybe<PrismicPageBodyAboutHankS>;
};

export enum PrismicPageBodyAboutHankSFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryTextHtml = 'primary___text___html',
  PrimaryTextText = 'primary___text___text',
  PrimaryTextRaw = 'primary___text___raw',
  Items = 'items',
  ItemsSideImageAlt = 'items___side_image___alt',
  ItemsSideImageCopyright = 'items___side_image___copyright',
  ItemsSideImageDimensionsWidth = 'items___side_image___dimensions___width',
  ItemsSideImageDimensionsHeight = 'items___side_image___dimensions___height',
  ItemsSideImageUrl = 'items___side_image___url',
  ItemsSideImageFixedBase64 = 'items___side_image___fixed___base64',
  ItemsSideImageFixedSrc = 'items___side_image___fixed___src',
  ItemsSideImageFixedSrcSet = 'items___side_image___fixed___srcSet',
  ItemsSideImageFixedSrcWebp = 'items___side_image___fixed___srcWebp',
  ItemsSideImageFixedSrcSetWebp = 'items___side_image___fixed___srcSetWebp',
  ItemsSideImageFixedSizes = 'items___side_image___fixed___sizes',
  ItemsSideImageFixedWidth = 'items___side_image___fixed___width',
  ItemsSideImageFixedHeight = 'items___side_image___fixed___height',
  ItemsSideImageFluidBase64 = 'items___side_image___fluid___base64',
  ItemsSideImageFluidSrc = 'items___side_image___fluid___src',
  ItemsSideImageFluidSrcSet = 'items___side_image___fluid___srcSet',
  ItemsSideImageFluidSrcWebp = 'items___side_image___fluid___srcWebp',
  ItemsSideImageFluidSrcSetWebp = 'items___side_image___fluid___srcSetWebp',
  ItemsSideImageFluidSizes = 'items___side_image___fluid___sizes',
  ItemsSideImageFluidAspectRatio = 'items___side_image___fluid___aspectRatio',
  ItemsSideImageLocalFileSourceInstanceName = 'items___side_image___localFile___sourceInstanceName',
  ItemsSideImageLocalFileAbsolutePath = 'items___side_image___localFile___absolutePath',
  ItemsSideImageLocalFileRelativePath = 'items___side_image___localFile___relativePath',
  ItemsSideImageLocalFileExtension = 'items___side_image___localFile___extension',
  ItemsSideImageLocalFileSize = 'items___side_image___localFile___size',
  ItemsSideImageLocalFilePrettySize = 'items___side_image___localFile___prettySize',
  ItemsSideImageLocalFileModifiedTime = 'items___side_image___localFile___modifiedTime',
  ItemsSideImageLocalFileAccessTime = 'items___side_image___localFile___accessTime',
  ItemsSideImageLocalFileChangeTime = 'items___side_image___localFile___changeTime',
  ItemsSideImageLocalFileBirthTime = 'items___side_image___localFile___birthTime',
  ItemsSideImageLocalFileRoot = 'items___side_image___localFile___root',
  ItemsSideImageLocalFileDir = 'items___side_image___localFile___dir',
  ItemsSideImageLocalFileBase = 'items___side_image___localFile___base',
  ItemsSideImageLocalFileExt = 'items___side_image___localFile___ext',
  ItemsSideImageLocalFileName = 'items___side_image___localFile___name',
  ItemsSideImageLocalFileRelativeDirectory = 'items___side_image___localFile___relativeDirectory',
  ItemsSideImageLocalFileDev = 'items___side_image___localFile___dev',
  ItemsSideImageLocalFileMode = 'items___side_image___localFile___mode',
  ItemsSideImageLocalFileNlink = 'items___side_image___localFile___nlink',
  ItemsSideImageLocalFileUid = 'items___side_image___localFile___uid',
  ItemsSideImageLocalFileGid = 'items___side_image___localFile___gid',
  ItemsSideImageLocalFileRdev = 'items___side_image___localFile___rdev',
  ItemsSideImageLocalFileIno = 'items___side_image___localFile___ino',
  ItemsSideImageLocalFileAtimeMs = 'items___side_image___localFile___atimeMs',
  ItemsSideImageLocalFileMtimeMs = 'items___side_image___localFile___mtimeMs',
  ItemsSideImageLocalFileCtimeMs = 'items___side_image___localFile___ctimeMs',
  ItemsSideImageLocalFileAtime = 'items___side_image___localFile___atime',
  ItemsSideImageLocalFileMtime = 'items___side_image___localFile___mtime',
  ItemsSideImageLocalFileCtime = 'items___side_image___localFile___ctime',
  ItemsSideImageLocalFileBirthtime = 'items___side_image___localFile___birthtime',
  ItemsSideImageLocalFileBirthtimeMs = 'items___side_image___localFile___birthtimeMs',
  ItemsSideImageLocalFileBlksize = 'items___side_image___localFile___blksize',
  ItemsSideImageLocalFileBlocks = 'items___side_image___localFile___blocks',
  ItemsSideImageLocalFilePublicUrl = 'items___side_image___localFile___publicURL',
  ItemsSideImageLocalFileId = 'items___side_image___localFile___id',
  ItemsSideImageLocalFileChildren = 'items___side_image___localFile___children',
  ItemsSideImageThumbnails = 'items___side_image___thumbnails',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicPageBodyAboutHankSFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicPageBodyAboutHankSPrimaryTypeFilterInput>;
  items?: Maybe<PrismicPageBodyAboutHankSItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicPageBodyAboutHankSGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyAboutHankSEdge>;
  nodes: Array<PrismicPageBodyAboutHankS>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicPageBodyAboutHankSItemType = {
  side_image?: Maybe<PrismicImageType>;
};

export type PrismicPageBodyAboutHankSItemTypeFilterInput = {
  side_image?: Maybe<PrismicImageTypeFilterInput>;
};

export type PrismicPageBodyAboutHankSItemTypeFilterListInput = {
  elemMatch?: Maybe<PrismicPageBodyAboutHankSItemTypeFilterInput>;
};

export type PrismicPageBodyAboutHankSPrimaryType = {
  text?: Maybe<PrismicStructuredTextType>;
};

export type PrismicPageBodyAboutHankSPrimaryTypeFilterInput = {
  text?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicPageBodyAboutHankSSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyAboutHankSFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicPageBodyDogSlideshow = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicPageBodyDogSlideshowPrimaryType>;
  items?: Maybe<Array<Maybe<PrismicPageBodyDogSlideshowItemType>>>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicPageBodyDogSlideshowConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyDogSlideshowEdge>;
  nodes: Array<PrismicPageBodyDogSlideshow>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicPageBodyDogSlideshowGroupConnection>;
};


export type PrismicPageBodyDogSlideshowConnectionDistinctArgs = {
  field: PrismicPageBodyDogSlideshowFieldsEnum;
};


export type PrismicPageBodyDogSlideshowConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicPageBodyDogSlideshowFieldsEnum;
};

export type PrismicPageBodyDogSlideshowEdge = {
  next?: Maybe<PrismicPageBodyDogSlideshow>;
  node: PrismicPageBodyDogSlideshow;
  previous?: Maybe<PrismicPageBodyDogSlideshow>;
};

export enum PrismicPageBodyDogSlideshowFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryTextHtml = 'primary___text___html',
  PrimaryTextText = 'primary___text___text',
  PrimaryTextRaw = 'primary___text___raw',
  Items = 'items',
  ItemsImageAlt = 'items___image___alt',
  ItemsImageCopyright = 'items___image___copyright',
  ItemsImageDimensionsWidth = 'items___image___dimensions___width',
  ItemsImageDimensionsHeight = 'items___image___dimensions___height',
  ItemsImageUrl = 'items___image___url',
  ItemsImageFixedBase64 = 'items___image___fixed___base64',
  ItemsImageFixedSrc = 'items___image___fixed___src',
  ItemsImageFixedSrcSet = 'items___image___fixed___srcSet',
  ItemsImageFixedSrcWebp = 'items___image___fixed___srcWebp',
  ItemsImageFixedSrcSetWebp = 'items___image___fixed___srcSetWebp',
  ItemsImageFixedSizes = 'items___image___fixed___sizes',
  ItemsImageFixedWidth = 'items___image___fixed___width',
  ItemsImageFixedHeight = 'items___image___fixed___height',
  ItemsImageFluidBase64 = 'items___image___fluid___base64',
  ItemsImageFluidSrc = 'items___image___fluid___src',
  ItemsImageFluidSrcSet = 'items___image___fluid___srcSet',
  ItemsImageFluidSrcWebp = 'items___image___fluid___srcWebp',
  ItemsImageFluidSrcSetWebp = 'items___image___fluid___srcSetWebp',
  ItemsImageFluidSizes = 'items___image___fluid___sizes',
  ItemsImageFluidAspectRatio = 'items___image___fluid___aspectRatio',
  ItemsImageLocalFileSourceInstanceName = 'items___image___localFile___sourceInstanceName',
  ItemsImageLocalFileAbsolutePath = 'items___image___localFile___absolutePath',
  ItemsImageLocalFileRelativePath = 'items___image___localFile___relativePath',
  ItemsImageLocalFileExtension = 'items___image___localFile___extension',
  ItemsImageLocalFileSize = 'items___image___localFile___size',
  ItemsImageLocalFilePrettySize = 'items___image___localFile___prettySize',
  ItemsImageLocalFileModifiedTime = 'items___image___localFile___modifiedTime',
  ItemsImageLocalFileAccessTime = 'items___image___localFile___accessTime',
  ItemsImageLocalFileChangeTime = 'items___image___localFile___changeTime',
  ItemsImageLocalFileBirthTime = 'items___image___localFile___birthTime',
  ItemsImageLocalFileRoot = 'items___image___localFile___root',
  ItemsImageLocalFileDir = 'items___image___localFile___dir',
  ItemsImageLocalFileBase = 'items___image___localFile___base',
  ItemsImageLocalFileExt = 'items___image___localFile___ext',
  ItemsImageLocalFileName = 'items___image___localFile___name',
  ItemsImageLocalFileRelativeDirectory = 'items___image___localFile___relativeDirectory',
  ItemsImageLocalFileDev = 'items___image___localFile___dev',
  ItemsImageLocalFileMode = 'items___image___localFile___mode',
  ItemsImageLocalFileNlink = 'items___image___localFile___nlink',
  ItemsImageLocalFileUid = 'items___image___localFile___uid',
  ItemsImageLocalFileGid = 'items___image___localFile___gid',
  ItemsImageLocalFileRdev = 'items___image___localFile___rdev',
  ItemsImageLocalFileIno = 'items___image___localFile___ino',
  ItemsImageLocalFileAtimeMs = 'items___image___localFile___atimeMs',
  ItemsImageLocalFileMtimeMs = 'items___image___localFile___mtimeMs',
  ItemsImageLocalFileCtimeMs = 'items___image___localFile___ctimeMs',
  ItemsImageLocalFileAtime = 'items___image___localFile___atime',
  ItemsImageLocalFileMtime = 'items___image___localFile___mtime',
  ItemsImageLocalFileCtime = 'items___image___localFile___ctime',
  ItemsImageLocalFileBirthtime = 'items___image___localFile___birthtime',
  ItemsImageLocalFileBirthtimeMs = 'items___image___localFile___birthtimeMs',
  ItemsImageLocalFileBlksize = 'items___image___localFile___blksize',
  ItemsImageLocalFileBlocks = 'items___image___localFile___blocks',
  ItemsImageLocalFilePublicUrl = 'items___image___localFile___publicURL',
  ItemsImageLocalFileId = 'items___image___localFile___id',
  ItemsImageLocalFileChildren = 'items___image___localFile___children',
  ItemsImageThumbnails = 'items___image___thumbnails',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicPageBodyDogSlideshowFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicPageBodyDogSlideshowPrimaryTypeFilterInput>;
  items?: Maybe<PrismicPageBodyDogSlideshowItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicPageBodyDogSlideshowGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyDogSlideshowEdge>;
  nodes: Array<PrismicPageBodyDogSlideshow>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicPageBodyDogSlideshowItemType = {
  image?: Maybe<PrismicImageType>;
};

export type PrismicPageBodyDogSlideshowItemTypeFilterInput = {
  image?: Maybe<PrismicImageTypeFilterInput>;
};

export type PrismicPageBodyDogSlideshowItemTypeFilterListInput = {
  elemMatch?: Maybe<PrismicPageBodyDogSlideshowItemTypeFilterInput>;
};

export type PrismicPageBodyDogSlideshowPrimaryType = {
  text?: Maybe<PrismicStructuredTextType>;
};

export type PrismicPageBodyDogSlideshowPrimaryTypeFilterInput = {
  text?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicPageBodyDogSlideshowSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyDogSlideshowFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicPageBodyImage = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicPageBodyImagePrimaryType>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicPageBodyImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyImageEdge>;
  nodes: Array<PrismicPageBodyImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicPageBodyImageGroupConnection>;
};


export type PrismicPageBodyImageConnectionDistinctArgs = {
  field: PrismicPageBodyImageFieldsEnum;
};


export type PrismicPageBodyImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicPageBodyImageFieldsEnum;
};

export type PrismicPageBodyImageEdge = {
  next?: Maybe<PrismicPageBodyImage>;
  node: PrismicPageBodyImage;
  previous?: Maybe<PrismicPageBodyImage>;
};

export enum PrismicPageBodyImageFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryImageAlt = 'primary___image___alt',
  PrimaryImageCopyright = 'primary___image___copyright',
  PrimaryImageDimensionsWidth = 'primary___image___dimensions___width',
  PrimaryImageDimensionsHeight = 'primary___image___dimensions___height',
  PrimaryImageUrl = 'primary___image___url',
  PrimaryImageFixedBase64 = 'primary___image___fixed___base64',
  PrimaryImageFixedSrc = 'primary___image___fixed___src',
  PrimaryImageFixedSrcSet = 'primary___image___fixed___srcSet',
  PrimaryImageFixedSrcWebp = 'primary___image___fixed___srcWebp',
  PrimaryImageFixedSrcSetWebp = 'primary___image___fixed___srcSetWebp',
  PrimaryImageFixedSizes = 'primary___image___fixed___sizes',
  PrimaryImageFixedWidth = 'primary___image___fixed___width',
  PrimaryImageFixedHeight = 'primary___image___fixed___height',
  PrimaryImageFluidBase64 = 'primary___image___fluid___base64',
  PrimaryImageFluidSrc = 'primary___image___fluid___src',
  PrimaryImageFluidSrcSet = 'primary___image___fluid___srcSet',
  PrimaryImageFluidSrcWebp = 'primary___image___fluid___srcWebp',
  PrimaryImageFluidSrcSetWebp = 'primary___image___fluid___srcSetWebp',
  PrimaryImageFluidSizes = 'primary___image___fluid___sizes',
  PrimaryImageFluidAspectRatio = 'primary___image___fluid___aspectRatio',
  PrimaryImageLocalFileSourceInstanceName = 'primary___image___localFile___sourceInstanceName',
  PrimaryImageLocalFileAbsolutePath = 'primary___image___localFile___absolutePath',
  PrimaryImageLocalFileRelativePath = 'primary___image___localFile___relativePath',
  PrimaryImageLocalFileExtension = 'primary___image___localFile___extension',
  PrimaryImageLocalFileSize = 'primary___image___localFile___size',
  PrimaryImageLocalFilePrettySize = 'primary___image___localFile___prettySize',
  PrimaryImageLocalFileModifiedTime = 'primary___image___localFile___modifiedTime',
  PrimaryImageLocalFileAccessTime = 'primary___image___localFile___accessTime',
  PrimaryImageLocalFileChangeTime = 'primary___image___localFile___changeTime',
  PrimaryImageLocalFileBirthTime = 'primary___image___localFile___birthTime',
  PrimaryImageLocalFileRoot = 'primary___image___localFile___root',
  PrimaryImageLocalFileDir = 'primary___image___localFile___dir',
  PrimaryImageLocalFileBase = 'primary___image___localFile___base',
  PrimaryImageLocalFileExt = 'primary___image___localFile___ext',
  PrimaryImageLocalFileName = 'primary___image___localFile___name',
  PrimaryImageLocalFileRelativeDirectory = 'primary___image___localFile___relativeDirectory',
  PrimaryImageLocalFileDev = 'primary___image___localFile___dev',
  PrimaryImageLocalFileMode = 'primary___image___localFile___mode',
  PrimaryImageLocalFileNlink = 'primary___image___localFile___nlink',
  PrimaryImageLocalFileUid = 'primary___image___localFile___uid',
  PrimaryImageLocalFileGid = 'primary___image___localFile___gid',
  PrimaryImageLocalFileRdev = 'primary___image___localFile___rdev',
  PrimaryImageLocalFileIno = 'primary___image___localFile___ino',
  PrimaryImageLocalFileAtimeMs = 'primary___image___localFile___atimeMs',
  PrimaryImageLocalFileMtimeMs = 'primary___image___localFile___mtimeMs',
  PrimaryImageLocalFileCtimeMs = 'primary___image___localFile___ctimeMs',
  PrimaryImageLocalFileAtime = 'primary___image___localFile___atime',
  PrimaryImageLocalFileMtime = 'primary___image___localFile___mtime',
  PrimaryImageLocalFileCtime = 'primary___image___localFile___ctime',
  PrimaryImageLocalFileBirthtime = 'primary___image___localFile___birthtime',
  PrimaryImageLocalFileBirthtimeMs = 'primary___image___localFile___birthtimeMs',
  PrimaryImageLocalFileBlksize = 'primary___image___localFile___blksize',
  PrimaryImageLocalFileBlocks = 'primary___image___localFile___blocks',
  PrimaryImageLocalFilePublicUrl = 'primary___image___localFile___publicURL',
  PrimaryImageLocalFileId = 'primary___image___localFile___id',
  PrimaryImageLocalFileChildren = 'primary___image___localFile___children',
  PrimaryImageThumbnails = 'primary___image___thumbnails',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicPageBodyImageFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicPageBodyImagePrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicPageBodyImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyImageEdge>;
  nodes: Array<PrismicPageBodyImage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicPageBodyImagePrimaryType = {
  image?: Maybe<PrismicImageType>;
};

export type PrismicPageBodyImagePrimaryTypeFilterInput = {
  image?: Maybe<PrismicImageTypeFilterInput>;
};

export type PrismicPageBodyImageSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyImageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicPageBodyLocations = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<PrismicPageBodyLocationsItemType>>>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicPageBodyLocationsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyLocationsEdge>;
  nodes: Array<PrismicPageBodyLocations>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicPageBodyLocationsGroupConnection>;
};


export type PrismicPageBodyLocationsConnectionDistinctArgs = {
  field: PrismicPageBodyLocationsFieldsEnum;
};


export type PrismicPageBodyLocationsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicPageBodyLocationsFieldsEnum;
};

export type PrismicPageBodyLocationsEdge = {
  next?: Maybe<PrismicPageBodyLocations>;
  node: PrismicPageBodyLocations;
  previous?: Maybe<PrismicPageBodyLocations>;
};

export enum PrismicPageBodyLocationsFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  Items = 'items',
  ItemsLocationLinkType = 'items___location___link_type',
  ItemsLocationIsBroken = 'items___location___isBroken',
  ItemsLocationUrl = 'items___location___url',
  ItemsLocationTarget = 'items___location___target',
  ItemsLocationSize = 'items___location___size',
  ItemsLocationId = 'items___location___id',
  ItemsLocationType = 'items___location___type',
  ItemsLocationTags = 'items___location___tags',
  ItemsLocationLang = 'items___location___lang',
  ItemsLocationSlug = 'items___location___slug',
  ItemsLocationUid = 'items___location___uid',
  ItemsLocationRaw = 'items___location___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicPageBodyLocationsFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  items?: Maybe<PrismicPageBodyLocationsItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicPageBodyLocationsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyLocationsEdge>;
  nodes: Array<PrismicPageBodyLocations>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicPageBodyLocationsItemType = {
  location?: Maybe<PrismicLinkType>;
};

export type PrismicPageBodyLocationsItemTypeFilterInput = {
  location?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicPageBodyLocationsItemTypeFilterListInput = {
  elemMatch?: Maybe<PrismicPageBodyLocationsItemTypeFilterInput>;
};

export type PrismicPageBodyLocationsSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyLocationsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicPageBodyProductList = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicPageBodyProductListPrimaryType>;
  items?: Maybe<Array<Maybe<PrismicPageBodyProductListItemType>>>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicPageBodyProductListConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyProductListEdge>;
  nodes: Array<PrismicPageBodyProductList>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicPageBodyProductListGroupConnection>;
};


export type PrismicPageBodyProductListConnectionDistinctArgs = {
  field: PrismicPageBodyProductListFieldsEnum;
};


export type PrismicPageBodyProductListConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicPageBodyProductListFieldsEnum;
};

export type PrismicPageBodyProductListEdge = {
  next?: Maybe<PrismicPageBodyProductList>;
  node: PrismicPageBodyProductList;
  previous?: Maybe<PrismicPageBodyProductList>;
};

export enum PrismicPageBodyProductListFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryCategoryImageAlt = 'primary___category_image___alt',
  PrimaryCategoryImageCopyright = 'primary___category_image___copyright',
  PrimaryCategoryImageDimensionsWidth = 'primary___category_image___dimensions___width',
  PrimaryCategoryImageDimensionsHeight = 'primary___category_image___dimensions___height',
  PrimaryCategoryImageUrl = 'primary___category_image___url',
  PrimaryCategoryImageFixedBase64 = 'primary___category_image___fixed___base64',
  PrimaryCategoryImageFixedSrc = 'primary___category_image___fixed___src',
  PrimaryCategoryImageFixedSrcSet = 'primary___category_image___fixed___srcSet',
  PrimaryCategoryImageFixedSrcWebp = 'primary___category_image___fixed___srcWebp',
  PrimaryCategoryImageFixedSrcSetWebp = 'primary___category_image___fixed___srcSetWebp',
  PrimaryCategoryImageFixedSizes = 'primary___category_image___fixed___sizes',
  PrimaryCategoryImageFixedWidth = 'primary___category_image___fixed___width',
  PrimaryCategoryImageFixedHeight = 'primary___category_image___fixed___height',
  PrimaryCategoryImageFluidBase64 = 'primary___category_image___fluid___base64',
  PrimaryCategoryImageFluidSrc = 'primary___category_image___fluid___src',
  PrimaryCategoryImageFluidSrcSet = 'primary___category_image___fluid___srcSet',
  PrimaryCategoryImageFluidSrcWebp = 'primary___category_image___fluid___srcWebp',
  PrimaryCategoryImageFluidSrcSetWebp = 'primary___category_image___fluid___srcSetWebp',
  PrimaryCategoryImageFluidSizes = 'primary___category_image___fluid___sizes',
  PrimaryCategoryImageFluidAspectRatio = 'primary___category_image___fluid___aspectRatio',
  PrimaryCategoryImageLocalFileSourceInstanceName = 'primary___category_image___localFile___sourceInstanceName',
  PrimaryCategoryImageLocalFileAbsolutePath = 'primary___category_image___localFile___absolutePath',
  PrimaryCategoryImageLocalFileRelativePath = 'primary___category_image___localFile___relativePath',
  PrimaryCategoryImageLocalFileExtension = 'primary___category_image___localFile___extension',
  PrimaryCategoryImageLocalFileSize = 'primary___category_image___localFile___size',
  PrimaryCategoryImageLocalFilePrettySize = 'primary___category_image___localFile___prettySize',
  PrimaryCategoryImageLocalFileModifiedTime = 'primary___category_image___localFile___modifiedTime',
  PrimaryCategoryImageLocalFileAccessTime = 'primary___category_image___localFile___accessTime',
  PrimaryCategoryImageLocalFileChangeTime = 'primary___category_image___localFile___changeTime',
  PrimaryCategoryImageLocalFileBirthTime = 'primary___category_image___localFile___birthTime',
  PrimaryCategoryImageLocalFileRoot = 'primary___category_image___localFile___root',
  PrimaryCategoryImageLocalFileDir = 'primary___category_image___localFile___dir',
  PrimaryCategoryImageLocalFileBase = 'primary___category_image___localFile___base',
  PrimaryCategoryImageLocalFileExt = 'primary___category_image___localFile___ext',
  PrimaryCategoryImageLocalFileName = 'primary___category_image___localFile___name',
  PrimaryCategoryImageLocalFileRelativeDirectory = 'primary___category_image___localFile___relativeDirectory',
  PrimaryCategoryImageLocalFileDev = 'primary___category_image___localFile___dev',
  PrimaryCategoryImageLocalFileMode = 'primary___category_image___localFile___mode',
  PrimaryCategoryImageLocalFileNlink = 'primary___category_image___localFile___nlink',
  PrimaryCategoryImageLocalFileUid = 'primary___category_image___localFile___uid',
  PrimaryCategoryImageLocalFileGid = 'primary___category_image___localFile___gid',
  PrimaryCategoryImageLocalFileRdev = 'primary___category_image___localFile___rdev',
  PrimaryCategoryImageLocalFileIno = 'primary___category_image___localFile___ino',
  PrimaryCategoryImageLocalFileAtimeMs = 'primary___category_image___localFile___atimeMs',
  PrimaryCategoryImageLocalFileMtimeMs = 'primary___category_image___localFile___mtimeMs',
  PrimaryCategoryImageLocalFileCtimeMs = 'primary___category_image___localFile___ctimeMs',
  PrimaryCategoryImageLocalFileAtime = 'primary___category_image___localFile___atime',
  PrimaryCategoryImageLocalFileMtime = 'primary___category_image___localFile___mtime',
  PrimaryCategoryImageLocalFileCtime = 'primary___category_image___localFile___ctime',
  PrimaryCategoryImageLocalFileBirthtime = 'primary___category_image___localFile___birthtime',
  PrimaryCategoryImageLocalFileBirthtimeMs = 'primary___category_image___localFile___birthtimeMs',
  PrimaryCategoryImageLocalFileBlksize = 'primary___category_image___localFile___blksize',
  PrimaryCategoryImageLocalFileBlocks = 'primary___category_image___localFile___blocks',
  PrimaryCategoryImageLocalFilePublicUrl = 'primary___category_image___localFile___publicURL',
  PrimaryCategoryImageLocalFileId = 'primary___category_image___localFile___id',
  PrimaryCategoryImageLocalFileChildren = 'primary___category_image___localFile___children',
  PrimaryCategoryImageThumbnails = 'primary___category_image___thumbnails',
  Items = 'items',
  ItemsProductLinkType = 'items___product___link_type',
  ItemsProductIsBroken = 'items___product___isBroken',
  ItemsProductUrl = 'items___product___url',
  ItemsProductTarget = 'items___product___target',
  ItemsProductSize = 'items___product___size',
  ItemsProductId = 'items___product___id',
  ItemsProductType = 'items___product___type',
  ItemsProductTags = 'items___product___tags',
  ItemsProductLang = 'items___product___lang',
  ItemsProductSlug = 'items___product___slug',
  ItemsProductUid = 'items___product___uid',
  ItemsProductRaw = 'items___product___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicPageBodyProductListFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicPageBodyProductListPrimaryTypeFilterInput>;
  items?: Maybe<PrismicPageBodyProductListItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicPageBodyProductListGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyProductListEdge>;
  nodes: Array<PrismicPageBodyProductList>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicPageBodyProductListItemType = {
  product?: Maybe<PrismicLinkType>;
};

export type PrismicPageBodyProductListItemTypeFilterInput = {
  product?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicPageBodyProductListItemTypeFilterListInput = {
  elemMatch?: Maybe<PrismicPageBodyProductListItemTypeFilterInput>;
};

export type PrismicPageBodyProductListPrimaryType = {
  category_image?: Maybe<PrismicImageType>;
};

export type PrismicPageBodyProductListPrimaryTypeFilterInput = {
  category_image?: Maybe<PrismicImageTypeFilterInput>;
};

export type PrismicPageBodyProductListSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyProductListFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicPageBodySlicesType = PrismicPageBodyDogSlideshow | PrismicPageBodyProductList | PrismicPageBodyAboutHankS | PrismicPageBodyLocations | PrismicPageBodyText | PrismicPageBodyImage;

export type PrismicPageBodyText = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicPageBodyTextPrimaryType>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicPageBodyTextConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyTextEdge>;
  nodes: Array<PrismicPageBodyText>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicPageBodyTextGroupConnection>;
};


export type PrismicPageBodyTextConnectionDistinctArgs = {
  field: PrismicPageBodyTextFieldsEnum;
};


export type PrismicPageBodyTextConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicPageBodyTextFieldsEnum;
};

export type PrismicPageBodyTextEdge = {
  next?: Maybe<PrismicPageBodyText>;
  node: PrismicPageBodyText;
  previous?: Maybe<PrismicPageBodyText>;
};

export enum PrismicPageBodyTextFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryTextHtml = 'primary___text___html',
  PrimaryTextText = 'primary___text___text',
  PrimaryTextRaw = 'primary___text___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicPageBodyTextFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicPageBodyTextPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicPageBodyTextGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyTextEdge>;
  nodes: Array<PrismicPageBodyText>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicPageBodyTextPrimaryType = {
  text?: Maybe<PrismicStructuredTextType>;
};

export type PrismicPageBodyTextPrimaryTypeFilterInput = {
  text?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicPageBodyTextSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyTextFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageEdge>;
  nodes: Array<PrismicPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicPageGroupConnection>;
};


export type PrismicPageConnectionDistinctArgs = {
  field: PrismicPageFieldsEnum;
};


export type PrismicPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicPageFieldsEnum;
};

export type PrismicPageDataType = {
  title?: Maybe<PrismicStructuredTextType>;
  meta_title?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  parent?: Maybe<PrismicLinkType>;
  redirect_to?: Maybe<PrismicLinkType>;
  redirect_is_permanent?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Array<Maybe<PrismicPageBodySlicesType>>>;
};

export type PrismicPageDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<PrismicLinkTypeFilterInput>;
  redirect_to?: Maybe<PrismicLinkTypeFilterInput>;
  redirect_is_permanent?: Maybe<BooleanQueryOperatorInput>;
};

export type PrismicPageEdge = {
  next?: Maybe<PrismicPage>;
  node: PrismicPage;
  previous?: Maybe<PrismicPage>;
};

export enum PrismicPageFieldsEnum {
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataMetaTitle = 'data___meta_title',
  DataMetaDescription = 'data___meta_description',
  DataParentLinkType = 'data___parent___link_type',
  DataParentIsBroken = 'data___parent___isBroken',
  DataParentUrl = 'data___parent___url',
  DataParentTarget = 'data___parent___target',
  DataParentSize = 'data___parent___size',
  DataParentId = 'data___parent___id',
  DataParentType = 'data___parent___type',
  DataParentTags = 'data___parent___tags',
  DataParentLang = 'data___parent___lang',
  DataParentSlug = 'data___parent___slug',
  DataParentUid = 'data___parent___uid',
  DataParentRaw = 'data___parent___raw',
  DataRedirectToLinkType = 'data___redirect_to___link_type',
  DataRedirectToIsBroken = 'data___redirect_to___isBroken',
  DataRedirectToUrl = 'data___redirect_to___url',
  DataRedirectToTarget = 'data___redirect_to___target',
  DataRedirectToSize = 'data___redirect_to___size',
  DataRedirectToId = 'data___redirect_to___id',
  DataRedirectToType = 'data___redirect_to___type',
  DataRedirectToTags = 'data___redirect_to___tags',
  DataRedirectToLang = 'data___redirect_to___lang',
  DataRedirectToSlug = 'data___redirect_to___slug',
  DataRedirectToUid = 'data___redirect_to___uid',
  DataRedirectToRaw = 'data___redirect_to___raw',
  DataRedirectIsPermanent = 'data___redirect_is_permanent',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Uid = 'uid',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicPageFilterInput = {
  data?: Maybe<PrismicPageDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageEdge>;
  nodes: Array<PrismicPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicPageSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicProduct = PrismicDocument & Node & {
  data?: Maybe<PrismicProductDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  _previewable: Scalars['ID'];
  uid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicProductFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicProductLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicProductConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicProductEdge>;
  nodes: Array<PrismicProduct>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicProductGroupConnection>;
};


export type PrismicProductConnectionDistinctArgs = {
  field: PrismicProductFieldsEnum;
};


export type PrismicProductConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicProductFieldsEnum;
};

export type PrismicProductDataType = {
  title?: Maybe<PrismicStructuredTextType>;
  description?: Maybe<PrismicStructuredTextType>;
  image?: Maybe<PrismicImageType>;
};

export type PrismicProductDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  description?: Maybe<PrismicStructuredTextTypeFilterInput>;
  image?: Maybe<PrismicImageTypeFilterInput>;
};

export type PrismicProductEdge = {
  next?: Maybe<PrismicProduct>;
  node: PrismicProduct;
  previous?: Maybe<PrismicProduct>;
};

export enum PrismicProductFieldsEnum {
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataDescriptionHtml = 'data___description___html',
  DataDescriptionText = 'data___description___text',
  DataDescriptionRaw = 'data___description___raw',
  DataImageAlt = 'data___image___alt',
  DataImageCopyright = 'data___image___copyright',
  DataImageDimensionsWidth = 'data___image___dimensions___width',
  DataImageDimensionsHeight = 'data___image___dimensions___height',
  DataImageUrl = 'data___image___url',
  DataImageFixedBase64 = 'data___image___fixed___base64',
  DataImageFixedSrc = 'data___image___fixed___src',
  DataImageFixedSrcSet = 'data___image___fixed___srcSet',
  DataImageFixedSrcWebp = 'data___image___fixed___srcWebp',
  DataImageFixedSrcSetWebp = 'data___image___fixed___srcSetWebp',
  DataImageFixedSizes = 'data___image___fixed___sizes',
  DataImageFixedWidth = 'data___image___fixed___width',
  DataImageFixedHeight = 'data___image___fixed___height',
  DataImageFluidBase64 = 'data___image___fluid___base64',
  DataImageFluidSrc = 'data___image___fluid___src',
  DataImageFluidSrcSet = 'data___image___fluid___srcSet',
  DataImageFluidSrcWebp = 'data___image___fluid___srcWebp',
  DataImageFluidSrcSetWebp = 'data___image___fluid___srcSetWebp',
  DataImageFluidSizes = 'data___image___fluid___sizes',
  DataImageFluidAspectRatio = 'data___image___fluid___aspectRatio',
  DataImageLocalFileSourceInstanceName = 'data___image___localFile___sourceInstanceName',
  DataImageLocalFileAbsolutePath = 'data___image___localFile___absolutePath',
  DataImageLocalFileRelativePath = 'data___image___localFile___relativePath',
  DataImageLocalFileExtension = 'data___image___localFile___extension',
  DataImageLocalFileSize = 'data___image___localFile___size',
  DataImageLocalFilePrettySize = 'data___image___localFile___prettySize',
  DataImageLocalFileModifiedTime = 'data___image___localFile___modifiedTime',
  DataImageLocalFileAccessTime = 'data___image___localFile___accessTime',
  DataImageLocalFileChangeTime = 'data___image___localFile___changeTime',
  DataImageLocalFileBirthTime = 'data___image___localFile___birthTime',
  DataImageLocalFileRoot = 'data___image___localFile___root',
  DataImageLocalFileDir = 'data___image___localFile___dir',
  DataImageLocalFileBase = 'data___image___localFile___base',
  DataImageLocalFileExt = 'data___image___localFile___ext',
  DataImageLocalFileName = 'data___image___localFile___name',
  DataImageLocalFileRelativeDirectory = 'data___image___localFile___relativeDirectory',
  DataImageLocalFileDev = 'data___image___localFile___dev',
  DataImageLocalFileMode = 'data___image___localFile___mode',
  DataImageLocalFileNlink = 'data___image___localFile___nlink',
  DataImageLocalFileUid = 'data___image___localFile___uid',
  DataImageLocalFileGid = 'data___image___localFile___gid',
  DataImageLocalFileRdev = 'data___image___localFile___rdev',
  DataImageLocalFileIno = 'data___image___localFile___ino',
  DataImageLocalFileAtimeMs = 'data___image___localFile___atimeMs',
  DataImageLocalFileMtimeMs = 'data___image___localFile___mtimeMs',
  DataImageLocalFileCtimeMs = 'data___image___localFile___ctimeMs',
  DataImageLocalFileAtime = 'data___image___localFile___atime',
  DataImageLocalFileMtime = 'data___image___localFile___mtime',
  DataImageLocalFileCtime = 'data___image___localFile___ctime',
  DataImageLocalFileBirthtime = 'data___image___localFile___birthtime',
  DataImageLocalFileBirthtimeMs = 'data___image___localFile___birthtimeMs',
  DataImageLocalFileBlksize = 'data___image___localFile___blksize',
  DataImageLocalFileBlocks = 'data___image___localFile___blocks',
  DataImageLocalFilePublicUrl = 'data___image___localFile___publicURL',
  DataImageLocalFileId = 'data___image___localFile___id',
  DataImageLocalFileChildren = 'data___image___localFile___children',
  DataImageThumbnails = 'data___image___thumbnails',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Uid = 'uid',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicProductFilterInput = {
  data?: Maybe<PrismicProductDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicProductGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicProductEdge>;
  nodes: Array<PrismicProduct>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicProductSortInput = {
  fields?: Maybe<Array<Maybe<PrismicProductFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicSettings = PrismicDocument & Node & {
  data?: Maybe<PrismicSettingsDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  _previewable: Scalars['ID'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicSettingsFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicSettingsLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicSettingsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicSettingsEdge>;
  nodes: Array<PrismicSettings>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicSettingsGroupConnection>;
};


export type PrismicSettingsConnectionDistinctArgs = {
  field: PrismicSettingsFieldsEnum;
};


export type PrismicSettingsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicSettingsFieldsEnum;
};

export type PrismicSettingsDataType = {
  title?: Maybe<PrismicStructuredTextType>;
  site_name?: Maybe<PrismicStructuredTextType>;
  site_description?: Maybe<PrismicStructuredTextType>;
  site_copyright?: Maybe<PrismicStructuredTextType>;
  facebook_handle?: Maybe<PrismicStructuredTextType>;
  twitter_handle?: Maybe<PrismicStructuredTextType>;
  instagram_handle?: Maybe<PrismicStructuredTextType>;
  footer_hours?: Maybe<PrismicStructuredTextType>;
  online_order_link?: Maybe<PrismicLinkType>;
  uber_eats_link?: Maybe<PrismicLinkType>;
  doordash_link?: Maybe<PrismicLinkType>;
  mailing_list_subscription_link?: Maybe<PrismicLinkType>;
  redirects?: Maybe<Array<Maybe<PrismicSettingsRedirectsGroupType>>>;
  preview_map?: Maybe<Array<Maybe<PrismicSettingsPreviewMapGroupType>>>;
};

export type PrismicSettingsDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  site_name?: Maybe<PrismicStructuredTextTypeFilterInput>;
  site_description?: Maybe<PrismicStructuredTextTypeFilterInput>;
  site_copyright?: Maybe<PrismicStructuredTextTypeFilterInput>;
  facebook_handle?: Maybe<PrismicStructuredTextTypeFilterInput>;
  twitter_handle?: Maybe<PrismicStructuredTextTypeFilterInput>;
  instagram_handle?: Maybe<PrismicStructuredTextTypeFilterInput>;
  footer_hours?: Maybe<PrismicStructuredTextTypeFilterInput>;
  online_order_link?: Maybe<PrismicLinkTypeFilterInput>;
  uber_eats_link?: Maybe<PrismicLinkTypeFilterInput>;
  doordash_link?: Maybe<PrismicLinkTypeFilterInput>;
  mailing_list_subscription_link?: Maybe<PrismicLinkTypeFilterInput>;
  redirects?: Maybe<PrismicSettingsRedirectsGroupTypeFilterListInput>;
  preview_map?: Maybe<PrismicSettingsPreviewMapGroupTypeFilterListInput>;
};

export type PrismicSettingsEdge = {
  next?: Maybe<PrismicSettings>;
  node: PrismicSettings;
  previous?: Maybe<PrismicSettings>;
};

export enum PrismicSettingsFieldsEnum {
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataSiteNameHtml = 'data___site_name___html',
  DataSiteNameText = 'data___site_name___text',
  DataSiteNameRaw = 'data___site_name___raw',
  DataSiteDescriptionHtml = 'data___site_description___html',
  DataSiteDescriptionText = 'data___site_description___text',
  DataSiteDescriptionRaw = 'data___site_description___raw',
  DataSiteCopyrightHtml = 'data___site_copyright___html',
  DataSiteCopyrightText = 'data___site_copyright___text',
  DataSiteCopyrightRaw = 'data___site_copyright___raw',
  DataFacebookHandleHtml = 'data___facebook_handle___html',
  DataFacebookHandleText = 'data___facebook_handle___text',
  DataFacebookHandleRaw = 'data___facebook_handle___raw',
  DataTwitterHandleHtml = 'data___twitter_handle___html',
  DataTwitterHandleText = 'data___twitter_handle___text',
  DataTwitterHandleRaw = 'data___twitter_handle___raw',
  DataInstagramHandleHtml = 'data___instagram_handle___html',
  DataInstagramHandleText = 'data___instagram_handle___text',
  DataInstagramHandleRaw = 'data___instagram_handle___raw',
  DataFooterHoursHtml = 'data___footer_hours___html',
  DataFooterHoursText = 'data___footer_hours___text',
  DataFooterHoursRaw = 'data___footer_hours___raw',
  DataOnlineOrderLinkLinkType = 'data___online_order_link___link_type',
  DataOnlineOrderLinkIsBroken = 'data___online_order_link___isBroken',
  DataOnlineOrderLinkUrl = 'data___online_order_link___url',
  DataOnlineOrderLinkTarget = 'data___online_order_link___target',
  DataOnlineOrderLinkSize = 'data___online_order_link___size',
  DataOnlineOrderLinkId = 'data___online_order_link___id',
  DataOnlineOrderLinkType = 'data___online_order_link___type',
  DataOnlineOrderLinkTags = 'data___online_order_link___tags',
  DataOnlineOrderLinkLang = 'data___online_order_link___lang',
  DataOnlineOrderLinkSlug = 'data___online_order_link___slug',
  DataOnlineOrderLinkUid = 'data___online_order_link___uid',
  DataOnlineOrderLinkRaw = 'data___online_order_link___raw',
  DataUberEatsLinkLinkType = 'data___uber_eats_link___link_type',
  DataUberEatsLinkIsBroken = 'data___uber_eats_link___isBroken',
  DataUberEatsLinkUrl = 'data___uber_eats_link___url',
  DataUberEatsLinkTarget = 'data___uber_eats_link___target',
  DataUberEatsLinkSize = 'data___uber_eats_link___size',
  DataUberEatsLinkId = 'data___uber_eats_link___id',
  DataUberEatsLinkType = 'data___uber_eats_link___type',
  DataUberEatsLinkTags = 'data___uber_eats_link___tags',
  DataUberEatsLinkLang = 'data___uber_eats_link___lang',
  DataUberEatsLinkSlug = 'data___uber_eats_link___slug',
  DataUberEatsLinkUid = 'data___uber_eats_link___uid',
  DataUberEatsLinkRaw = 'data___uber_eats_link___raw',
  DataDoordashLinkLinkType = 'data___doordash_link___link_type',
  DataDoordashLinkIsBroken = 'data___doordash_link___isBroken',
  DataDoordashLinkUrl = 'data___doordash_link___url',
  DataDoordashLinkTarget = 'data___doordash_link___target',
  DataDoordashLinkSize = 'data___doordash_link___size',
  DataDoordashLinkId = 'data___doordash_link___id',
  DataDoordashLinkType = 'data___doordash_link___type',
  DataDoordashLinkTags = 'data___doordash_link___tags',
  DataDoordashLinkLang = 'data___doordash_link___lang',
  DataDoordashLinkSlug = 'data___doordash_link___slug',
  DataDoordashLinkUid = 'data___doordash_link___uid',
  DataDoordashLinkRaw = 'data___doordash_link___raw',
  DataMailingListSubscriptionLinkLinkType = 'data___mailing_list_subscription_link___link_type',
  DataMailingListSubscriptionLinkIsBroken = 'data___mailing_list_subscription_link___isBroken',
  DataMailingListSubscriptionLinkUrl = 'data___mailing_list_subscription_link___url',
  DataMailingListSubscriptionLinkTarget = 'data___mailing_list_subscription_link___target',
  DataMailingListSubscriptionLinkSize = 'data___mailing_list_subscription_link___size',
  DataMailingListSubscriptionLinkId = 'data___mailing_list_subscription_link___id',
  DataMailingListSubscriptionLinkType = 'data___mailing_list_subscription_link___type',
  DataMailingListSubscriptionLinkTags = 'data___mailing_list_subscription_link___tags',
  DataMailingListSubscriptionLinkLang = 'data___mailing_list_subscription_link___lang',
  DataMailingListSubscriptionLinkSlug = 'data___mailing_list_subscription_link___slug',
  DataMailingListSubscriptionLinkUid = 'data___mailing_list_subscription_link___uid',
  DataMailingListSubscriptionLinkRaw = 'data___mailing_list_subscription_link___raw',
  DataRedirects = 'data___redirects',
  DataRedirectsFromPath = 'data___redirects___from_path',
  DataRedirectsToPath = 'data___redirects___to_path',
  DataRedirectsIsPermanent = 'data___redirects___is_permanent',
  DataPreviewMap = 'data___preview_map',
  DataPreviewMapApiId = 'data___preview_map___api_id',
  DataPreviewMapPageLinkType = 'data___preview_map___page___link_type',
  DataPreviewMapPageIsBroken = 'data___preview_map___page___isBroken',
  DataPreviewMapPageUrl = 'data___preview_map___page___url',
  DataPreviewMapPageTarget = 'data___preview_map___page___target',
  DataPreviewMapPageSize = 'data___preview_map___page___size',
  DataPreviewMapPageId = 'data___preview_map___page___id',
  DataPreviewMapPageType = 'data___preview_map___page___type',
  DataPreviewMapPageTags = 'data___preview_map___page___tags',
  DataPreviewMapPageLang = 'data___preview_map___page___lang',
  DataPreviewMapPageSlug = 'data___preview_map___page___slug',
  DataPreviewMapPageUid = 'data___preview_map___page___uid',
  DataPreviewMapPageRaw = 'data___preview_map___page___raw',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicSettingsFilterInput = {
  data?: Maybe<PrismicSettingsDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicSettingsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicSettingsEdge>;
  nodes: Array<PrismicSettings>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicSettingsPreviewMapGroupType = {
  api_id?: Maybe<Scalars['String']>;
  page?: Maybe<PrismicLinkType>;
};

export type PrismicSettingsPreviewMapGroupTypeFilterInput = {
  api_id?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicSettingsPreviewMapGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicSettingsPreviewMapGroupTypeFilterInput>;
};

export type PrismicSettingsRedirectsGroupType = {
  from_path?: Maybe<Scalars['String']>;
  to_path?: Maybe<Scalars['String']>;
  is_permanent?: Maybe<Scalars['Boolean']>;
};

export type PrismicSettingsRedirectsGroupTypeFilterInput = {
  from_path?: Maybe<StringQueryOperatorInput>;
  to_path?: Maybe<StringQueryOperatorInput>;
  is_permanent?: Maybe<BooleanQueryOperatorInput>;
};

export type PrismicSettingsRedirectsGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicSettingsRedirectsGroupTypeFilterInput>;
};

export type PrismicSettingsSortInput = {
  fields?: Maybe<Array<Maybe<PrismicSettingsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicSliceType = {
  /** The slice type API ID. */
  slice_type: Scalars['String'];
  /** The slice label. */
  slice_label?: Maybe<Scalars['String']>;
};

/** A text field with formatting options. */
export type PrismicStructuredTextType = {
  /** The HTML value of the text using `prismic-dom` and the HTML serializer. */
  html?: Maybe<Scalars['String']>;
  /** The plain text value of the text using `prismic-dom`. */
  text?: Maybe<Scalars['String']>;
  /** The field's value without transformations exactly as it comes from the Prismic API. */
  raw?: Maybe<Scalars['JSON']>;
};

export type PrismicStructuredTextTypeFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<JsonQueryOperatorInput>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  prismicLocation?: Maybe<PrismicLocation>;
  allPrismicLocation: PrismicLocationConnection;
  prismicNavigationMainNavItem?: Maybe<PrismicNavigationMainNavItem>;
  allPrismicNavigationMainNavItem: PrismicNavigationMainNavItemConnection;
  prismicNavigation?: Maybe<PrismicNavigation>;
  allPrismicNavigation: PrismicNavigationConnection;
  prismicPageBodyDogSlideshow?: Maybe<PrismicPageBodyDogSlideshow>;
  allPrismicPageBodyDogSlideshow: PrismicPageBodyDogSlideshowConnection;
  prismicPageBodyProductList?: Maybe<PrismicPageBodyProductList>;
  allPrismicPageBodyProductList: PrismicPageBodyProductListConnection;
  prismicPageBodyAboutHankS?: Maybe<PrismicPageBodyAboutHankS>;
  allPrismicPageBodyAboutHankS: PrismicPageBodyAboutHankSConnection;
  prismicPageBodyLocations?: Maybe<PrismicPageBodyLocations>;
  allPrismicPageBodyLocations: PrismicPageBodyLocationsConnection;
  prismicPageBodyText?: Maybe<PrismicPageBodyText>;
  allPrismicPageBodyText: PrismicPageBodyTextConnection;
  prismicPageBodyImage?: Maybe<PrismicPageBodyImage>;
  allPrismicPageBodyImage: PrismicPageBodyImageConnection;
  prismicPage?: Maybe<PrismicPage>;
  allPrismicPage: PrismicPageConnection;
  prismicProduct?: Maybe<PrismicProduct>;
  allPrismicProduct: PrismicProductConnection;
  prismicSettings?: Maybe<PrismicSettings>;
  allPrismicSettings: PrismicSettingsConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicLocationArgs = {
  data?: Maybe<PrismicLocationDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicLocationArgs = {
  filter?: Maybe<PrismicLocationFilterInput>;
  sort?: Maybe<PrismicLocationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicNavigationMainNavItemArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicNavigationMainNavItemPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicNavigationMainNavItemArgs = {
  filter?: Maybe<PrismicNavigationMainNavItemFilterInput>;
  sort?: Maybe<PrismicNavigationMainNavItemSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicNavigationArgs = {
  data?: Maybe<PrismicNavigationDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicNavigationArgs = {
  filter?: Maybe<PrismicNavigationFilterInput>;
  sort?: Maybe<PrismicNavigationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicPageBodyDogSlideshowArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicPageBodyDogSlideshowPrimaryTypeFilterInput>;
  items?: Maybe<PrismicPageBodyDogSlideshowItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicPageBodyDogSlideshowArgs = {
  filter?: Maybe<PrismicPageBodyDogSlideshowFilterInput>;
  sort?: Maybe<PrismicPageBodyDogSlideshowSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicPageBodyProductListArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicPageBodyProductListPrimaryTypeFilterInput>;
  items?: Maybe<PrismicPageBodyProductListItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicPageBodyProductListArgs = {
  filter?: Maybe<PrismicPageBodyProductListFilterInput>;
  sort?: Maybe<PrismicPageBodyProductListSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicPageBodyAboutHankSArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicPageBodyAboutHankSPrimaryTypeFilterInput>;
  items?: Maybe<PrismicPageBodyAboutHankSItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicPageBodyAboutHankSArgs = {
  filter?: Maybe<PrismicPageBodyAboutHankSFilterInput>;
  sort?: Maybe<PrismicPageBodyAboutHankSSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicPageBodyLocationsArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  items?: Maybe<PrismicPageBodyLocationsItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicPageBodyLocationsArgs = {
  filter?: Maybe<PrismicPageBodyLocationsFilterInput>;
  sort?: Maybe<PrismicPageBodyLocationsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicPageBodyTextArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicPageBodyTextPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicPageBodyTextArgs = {
  filter?: Maybe<PrismicPageBodyTextFilterInput>;
  sort?: Maybe<PrismicPageBodyTextSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicPageBodyImageArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicPageBodyImagePrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicPageBodyImageArgs = {
  filter?: Maybe<PrismicPageBodyImageFilterInput>;
  sort?: Maybe<PrismicPageBodyImageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicPageArgs = {
  data?: Maybe<PrismicPageDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicPageArgs = {
  filter?: Maybe<PrismicPageFilterInput>;
  sort?: Maybe<PrismicPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicProductArgs = {
  data?: Maybe<PrismicProductDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicProductArgs = {
  filter?: Maybe<PrismicProductFilterInput>;
  sort?: Maybe<PrismicProductSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicSettingsArgs = {
  data?: Maybe<PrismicSettingsDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicSettingsArgs = {
  filter?: Maybe<PrismicSettingsFilterInput>;
  sort?: Maybe<PrismicSettingsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataTitleShort = 'siteMetadata___titleShort',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  uid?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  uid?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextUid = 'context___uid',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  PluginCreatorPluginOptionsRepositoryName = 'pluginCreator___pluginOptions___repositoryName',
  PluginCreatorPluginOptionsAccessToken = 'pluginCreator___pluginOptions___accessToken',
  PluginCreatorPluginOptionsFetchLinks = 'pluginCreator___pluginOptions___fetchLinks',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
  PluginOptionsRepositoryName = 'pluginOptions___repositoryName',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsFetchLinks = 'pluginOptions___fetchLinks',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  repositoryName?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  schemas?: Maybe<SitePluginPluginOptionsSchemas>;
  fetchLinks?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  repositoryName?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  schemas?: Maybe<SitePluginPluginOptionsSchemasFilterInput>;
  fetchLinks?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemas = {
  location?: Maybe<SitePluginPluginOptionsSchemasLocation>;
  navigation?: Maybe<SitePluginPluginOptionsSchemasNavigation>;
  page?: Maybe<SitePluginPluginOptionsSchemasPage>;
  product?: Maybe<SitePluginPluginOptionsSchemasProduct>;
  settings?: Maybe<SitePluginPluginOptionsSchemasSettings>;
};

export type SitePluginPluginOptionsSchemasFilterInput = {
  location?: Maybe<SitePluginPluginOptionsSchemasLocationFilterInput>;
  navigation?: Maybe<SitePluginPluginOptionsSchemasNavigationFilterInput>;
  page?: Maybe<SitePluginPluginOptionsSchemasPageFilterInput>;
  product?: Maybe<SitePluginPluginOptionsSchemasProductFilterInput>;
  settings?: Maybe<SitePluginPluginOptionsSchemasSettingsFilterInput>;
};

export type SitePluginPluginOptionsSchemasLocation = {
  Main?: Maybe<SitePluginPluginOptionsSchemasLocationMain>;
};

export type SitePluginPluginOptionsSchemasLocationFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasLocationMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasLocationMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasLocationMainTitle>;
  address?: Maybe<SitePluginPluginOptionsSchemasLocationMainAddress>;
  address_link?: Maybe<SitePluginPluginOptionsSchemasLocationMainAddress_Link>;
  phone_number?: Maybe<SitePluginPluginOptionsSchemasLocationMainPhone_Number>;
  email_address?: Maybe<SitePluginPluginOptionsSchemasLocationMainEmail_Address>;
  hours?: Maybe<SitePluginPluginOptionsSchemasLocationMainHours>;
  jobs_link?: Maybe<SitePluginPluginOptionsSchemasLocationMainJobs_Link>;
  image?: Maybe<SitePluginPluginOptionsSchemasLocationMainImage>;
};

export type SitePluginPluginOptionsSchemasLocationMainAddress = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasLocationMainAddressConfig>;
};

export type SitePluginPluginOptionsSchemasLocationMainAddress_Link = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasLocationMainAddress_LinkConfig>;
};

export type SitePluginPluginOptionsSchemasLocationMainAddress_LinkConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasLocationMainAddress_LinkConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasLocationMainAddress_LinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasLocationMainAddress_LinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasLocationMainAddressConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasLocationMainAddressConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasLocationMainAddressFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasLocationMainAddressConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasLocationMainEmail_Address = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasLocationMainEmail_AddressConfig>;
};

export type SitePluginPluginOptionsSchemasLocationMainEmail_AddressConfig = {
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasLocationMainEmail_AddressConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasLocationMainEmail_AddressFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasLocationMainEmail_AddressConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasLocationMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasLocationMainTitleFilterInput>;
  address?: Maybe<SitePluginPluginOptionsSchemasLocationMainAddressFilterInput>;
  address_link?: Maybe<SitePluginPluginOptionsSchemasLocationMainAddress_LinkFilterInput>;
  phone_number?: Maybe<SitePluginPluginOptionsSchemasLocationMainPhone_NumberFilterInput>;
  email_address?: Maybe<SitePluginPluginOptionsSchemasLocationMainEmail_AddressFilterInput>;
  hours?: Maybe<SitePluginPluginOptionsSchemasLocationMainHoursFilterInput>;
  jobs_link?: Maybe<SitePluginPluginOptionsSchemasLocationMainJobs_LinkFilterInput>;
  image?: Maybe<SitePluginPluginOptionsSchemasLocationMainImageFilterInput>;
};

export type SitePluginPluginOptionsSchemasLocationMainHours = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasLocationMainHoursConfig>;
};

export type SitePluginPluginOptionsSchemasLocationMainHoursConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasLocationMainHoursConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasLocationMainHoursFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasLocationMainHoursConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasLocationMainImage = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasLocationMainImageConfig>;
};

export type SitePluginPluginOptionsSchemasLocationMainImageConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasLocationMainImageConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasLocationMainImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasLocationMainImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasLocationMainJobs_Link = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasLocationMainJobs_LinkConfig>;
};

export type SitePluginPluginOptionsSchemasLocationMainJobs_LinkConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasLocationMainJobs_LinkConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasLocationMainJobs_LinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasLocationMainJobs_LinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasLocationMainPhone_Number = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasLocationMainPhone_NumberConfig>;
};

export type SitePluginPluginOptionsSchemasLocationMainPhone_NumberConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasLocationMainPhone_NumberConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasLocationMainPhone_NumberFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasLocationMainPhone_NumberConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasLocationMainTitle = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasLocationMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasLocationMainTitleConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasLocationMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasLocationMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasLocationMainTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigation = {
  Main?: Maybe<SitePluginPluginOptionsSchemasNavigationMain>;
};

export type SitePluginPluginOptionsSchemasNavigationFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasNavigationMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitle>;
  uid?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUid>;
  main?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMain>;
};

export type SitePluginPluginOptionsSchemasNavigationMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitleFilterInput>;
  uid?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUidFilterInput>;
  main?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMain = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfig>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfig = {
  choices?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoices>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoices = {
  nav_item?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_Item>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesFilterInput = {
  nav_item?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_Item = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_Repeat>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_Repeat = {
  name?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatName>;
  link?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLink>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatFilterInput = {
  name?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatNameFilterInput>;
  link?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLinkFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLink = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLinkConfig>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLinkConfig = {
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLinkConfigFilterInput = {
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatName = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatNameConfig>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatNameConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatNameConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatNameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatNameConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigFilterInput = {
  choices?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainTitle = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasNavigationMainTitleConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNavigationMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainUid = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasNavigationMainUidConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNavigationMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPage = {
  Main?: Maybe<SitePluginPluginOptionsSchemasPageMain>;
  Body?: Maybe<SitePluginPluginOptionsSchemasPageBody>;
};

export type SitePluginPluginOptionsSchemasPageBody = {
  body?: Maybe<SitePluginPluginOptionsSchemasPageBodyBody>;
};

export type SitePluginPluginOptionsSchemasPageBodyBody = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfig = {
  choices?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoices>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoices = {
  dog_slideshow?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_Slideshow>;
  product_list?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_List>;
  about_hank_s?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_S>;
  locations?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLocations>;
  text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText>;
  image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_S = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SNon_Repeat>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SRepeat>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SNon_RepeatFilterInput>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SRepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SNon_Repeat = {
  text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SNon_RepeatText>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SNon_RepeatFilterInput = {
  text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SNon_RepeatTextFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SNon_RepeatText = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SNon_RepeatTextConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SNon_RepeatTextConfig = {
  multi?: Maybe<Scalars['String']>;
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SNon_RepeatTextConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SNon_RepeatTextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SNon_RepeatTextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SRepeat = {
  side_image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SRepeatSide_Image>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SRepeatFilterInput = {
  side_image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SRepeatSide_ImageFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SRepeatSide_Image = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SRepeatSide_ImageConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SRepeatSide_ImageConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SRepeatSide_ImageConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SRepeatSide_ImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SRepeatSide_ImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_Slideshow = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowNon_Repeat>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowRepeat>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowNon_RepeatFilterInput>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowRepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowNon_Repeat = {
  text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowNon_RepeatText>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowNon_RepeatFilterInput = {
  text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowNon_RepeatTextFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowNon_RepeatText = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowNon_RepeatTextConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowNon_RepeatTextConfig = {
  multi?: Maybe<Scalars['String']>;
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowNon_RepeatTextConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowNon_RepeatTextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowNon_RepeatTextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowRepeat = {
  image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowRepeatImage>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowRepeatFilterInput = {
  image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowRepeatImageFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowRepeatImage = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowRepeatImageConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowRepeatImageConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowRepeatImageConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowRepeatImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowRepeatImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterInput = {
  dog_slideshow?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesDog_SlideshowFilterInput>;
  product_list?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListFilterInput>;
  about_hank_s?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAbout_Hank_SFilterInput>;
  locations?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLocationsFilterInput>;
  text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextFilterInput>;
  image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImageFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImageNon_Repeat>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImageNon_RepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImageNon_Repeat = {
  image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImageNon_RepeatImage>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImageNon_RepeatFilterInput = {
  image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImageNon_RepeatImageFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImageNon_RepeatImage = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImageNon_RepeatImageConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImageNon_RepeatImageConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImageNon_RepeatImageConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImageNon_RepeatImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImageNon_RepeatImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLocations = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLocationsRepeat>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLocationsFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLocationsRepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLocationsRepeat = {
  location?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLocationsRepeatLocation>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLocationsRepeatFilterInput = {
  location?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLocationsRepeatLocationFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLocationsRepeatLocation = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLocationsRepeatLocationConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLocationsRepeatLocationConfig = {
  select?: Maybe<Scalars['String']>;
  customtypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLocationsRepeatLocationConfigFilterInput = {
  select?: Maybe<StringQueryOperatorInput>;
  customtypes?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLocationsRepeatLocationFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLocationsRepeatLocationConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_List = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListNon_Repeat>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListRepeat>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListNon_RepeatFilterInput>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListRepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListNon_Repeat = {
  category_image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListNon_RepeatCategory_Image>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListNon_RepeatCategory_Image = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListNon_RepeatCategory_ImageConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListNon_RepeatCategory_ImageConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListNon_RepeatCategory_ImageConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListNon_RepeatCategory_ImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListNon_RepeatCategory_ImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListNon_RepeatFilterInput = {
  category_image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListNon_RepeatCategory_ImageFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListRepeat = {
  product?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListRepeatProduct>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListRepeatFilterInput = {
  product?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListRepeatProductFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListRepeatProduct = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListRepeatProductConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListRepeatProductConfig = {
  select?: Maybe<Scalars['String']>;
  customtypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListRepeatProductConfigFilterInput = {
  select?: Maybe<StringQueryOperatorInput>;
  customtypes?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListRepeatProductFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesProduct_ListRepeatProductConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_Repeat>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_Repeat = {
  text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatText>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatFilterInput = {
  text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatTextFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatText = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatTextConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatTextConfig = {
  multi?: Maybe<Scalars['String']>;
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatTextConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatTextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatTextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigFilterInput = {
  choices?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyFilterInput = {
  body?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasPageMainFilterInput>;
  Body?: Maybe<SitePluginPluginOptionsSchemasPageBodyFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasPageMainTitle>;
  uid?: Maybe<SitePluginPluginOptionsSchemasPageMainUid>;
  meta_title?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_Title>;
  meta_description?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_Description>;
  parent?: Maybe<SitePluginPluginOptionsSchemasPageMainParent>;
  redirect_to?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_To>;
  redirect_is_permanent?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_Permanent>;
};

export type SitePluginPluginOptionsSchemasPageMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleFilterInput>;
  uid?: Maybe<SitePluginPluginOptionsSchemasPageMainUidFilterInput>;
  meta_title?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_TitleFilterInput>;
  meta_description?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_DescriptionFilterInput>;
  parent?: Maybe<SitePluginPluginOptionsSchemasPageMainParentFilterInput>;
  redirect_to?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_ToFilterInput>;
  redirect_is_permanent?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainMeta_Description = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainMeta_DescriptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainMeta_Title = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_TitleConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainMeta_TitleConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainMeta_TitleConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainMeta_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_TitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainParent = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainParentConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainParentConfig = {
  select?: Maybe<Scalars['String']>;
  customtypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainParentConfigFilterInput = {
  select?: Maybe<StringQueryOperatorInput>;
  customtypes?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainParentFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainParentConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_Permanent = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfig = {
  placeholder_false?: Maybe<Scalars['String']>;
  placeholder_true?: Maybe<Scalars['String']>;
  default_value?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfigFilterInput = {
  placeholder_false?: Maybe<StringQueryOperatorInput>;
  placeholder_true?: Maybe<StringQueryOperatorInput>;
  default_value?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainRedirect_To = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_ToConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainRedirect_ToConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainRedirect_ToConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainRedirect_ToFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_ToConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainTitle = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainTitleConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainUid = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainUidConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasProduct = {
  Main?: Maybe<SitePluginPluginOptionsSchemasProductMain>;
};

export type SitePluginPluginOptionsSchemasProductFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasProductMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasProductMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasProductMainTitle>;
  uid?: Maybe<SitePluginPluginOptionsSchemasProductMainUid>;
  description?: Maybe<SitePluginPluginOptionsSchemasProductMainDescription>;
  image?: Maybe<SitePluginPluginOptionsSchemasProductMainImage>;
};

export type SitePluginPluginOptionsSchemasProductMainDescription = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainDescriptionConfig>;
};

export type SitePluginPluginOptionsSchemasProductMainDescriptionConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainDescriptionConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainDescriptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainDescriptionConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasProductMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasProductMainTitleFilterInput>;
  uid?: Maybe<SitePluginPluginOptionsSchemasProductMainUidFilterInput>;
  description?: Maybe<SitePluginPluginOptionsSchemasProductMainDescriptionFilterInput>;
  image?: Maybe<SitePluginPluginOptionsSchemasProductMainImageFilterInput>;
};

export type SitePluginPluginOptionsSchemasProductMainImage = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainImageConfig>;
};

export type SitePluginPluginOptionsSchemasProductMainImageConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainImageConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasProductMainTitle = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasProductMainTitleConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasProductMainUid = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasProductMainUidConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettings = {
  Main?: Maybe<SitePluginPluginOptionsSchemasSettingsMain>;
  Redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirects>;
  Developer_Only?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_Only>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_Only = {
  preview_map?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_Map>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyFilterInput = {
  preview_map?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_Map = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfig = {
  fields?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFields>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFields = {
  api_id?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_Id>;
  page?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPage>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_Id = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsFilterInput = {
  api_id?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdFilterInput>;
  page?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPage = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFilterInput = {
  fields?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFilterInput>;
  Redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsFilterInput>;
  Developer_Only?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitle>;
  site_name?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_Name>;
  site_description?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_Description>;
  site_copyright?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_Copyright>;
  facebook_handle?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFacebook_Handle>;
  twitter_handle?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTwitter_Handle>;
  instagram_handle?: Maybe<SitePluginPluginOptionsSchemasSettingsMainInstagram_Handle>;
  footer_hours?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFooter_Hours>;
  online_order_link?: Maybe<SitePluginPluginOptionsSchemasSettingsMainOnline_Order_Link>;
  uber_eats_link?: Maybe<SitePluginPluginOptionsSchemasSettingsMainUber_Eats_Link>;
  doordash_link?: Maybe<SitePluginPluginOptionsSchemasSettingsMainDoordash_Link>;
  mailing_list_subscription_link?: Maybe<SitePluginPluginOptionsSchemasSettingsMainMailing_List_Subscription_Link>;
};

export type SitePluginPluginOptionsSchemasSettingsMainDoordash_Link = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainDoordash_LinkConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsMainDoordash_LinkConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsMainDoordash_LinkConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainDoordash_LinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainDoordash_LinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainFacebook_Handle = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitleFilterInput>;
  site_name?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_NameFilterInput>;
  site_description?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionFilterInput>;
  site_copyright?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightFilterInput>;
  facebook_handle?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleFilterInput>;
  twitter_handle?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTwitter_HandleFilterInput>;
  instagram_handle?: Maybe<SitePluginPluginOptionsSchemasSettingsMainInstagram_HandleFilterInput>;
  footer_hours?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFooter_HoursFilterInput>;
  online_order_link?: Maybe<SitePluginPluginOptionsSchemasSettingsMainOnline_Order_LinkFilterInput>;
  uber_eats_link?: Maybe<SitePluginPluginOptionsSchemasSettingsMainUber_Eats_LinkFilterInput>;
  doordash_link?: Maybe<SitePluginPluginOptionsSchemasSettingsMainDoordash_LinkFilterInput>;
  mailing_list_subscription_link?: Maybe<SitePluginPluginOptionsSchemasSettingsMainMailing_List_Subscription_LinkFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainFooter_Hours = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFooter_HoursConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsMainFooter_HoursConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsMainFooter_HoursConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainFooter_HoursFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFooter_HoursConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainInstagram_Handle = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainInstagram_HandleConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsMainInstagram_HandleConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsMainInstagram_HandleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainInstagram_HandleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainInstagram_HandleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainMailing_List_Subscription_Link = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainMailing_List_Subscription_LinkConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsMainMailing_List_Subscription_LinkConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsMainMailing_List_Subscription_LinkConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainMailing_List_Subscription_LinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainMailing_List_Subscription_LinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainOnline_Order_Link = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainOnline_Order_LinkConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsMainOnline_Order_LinkConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsMainOnline_Order_LinkConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainOnline_Order_LinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainOnline_Order_LinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_Copyright = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_Description = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_Name = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_NameConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_NameConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_NameConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_NameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_NameConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainTitle = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsMainTitleConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainTwitter_Handle = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTwitter_HandleConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsMainTwitter_HandleConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsMainTwitter_HandleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainTwitter_HandleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTwitter_HandleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainUber_Eats_Link = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainUber_Eats_LinkConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsMainUber_Eats_LinkConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsMainUber_Eats_LinkConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainUber_Eats_LinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainUber_Eats_LinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirects = {
  redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirects>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsFilterInput = {
  redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirects = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfig = {
  fields?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFields>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFields = {
  from_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_Path>;
  to_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_Path>;
  is_permanent?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_Permanent>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFilterInput = {
  from_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathFilterInput>;
  to_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathFilterInput>;
  is_permanent?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_Path = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_Permanent = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfig = {
  placeholder_false?: Maybe<Scalars['String']>;
  placeholder_true?: Maybe<Scalars['String']>;
  default_value?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfigFilterInput = {
  placeholder_false?: Maybe<StringQueryOperatorInput>;
  placeholder_true?: Maybe<StringQueryOperatorInput>;
  default_value?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_Path = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFilterInput = {
  fields?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  titleShort?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  titleShort?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyPrismicImageFixedFragment = Pick<PrismicImageFixedType, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyPrismicImageFixed_NoBase64Fragment = Pick<PrismicImageFixedType, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyPrismicImageFixed_WithWebpFragment = Pick<PrismicImageFixedType, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyPrismicImageFixed_WithWebp_NoBase64Fragment = Pick<PrismicImageFixedType, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyPrismicImageFluidFragment = Pick<PrismicImageFluidType, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyPrismicImageFluid_NoBase64Fragment = Pick<PrismicImageFluidType, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyPrismicImageFluid_WithWebpFragment = Pick<PrismicImageFluidType, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyPrismicImageFluid_WithWebp_NoBase64Fragment = Pick<PrismicImageFluidType, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type FramedImageQueryVariables = Exact<{ [key: string]: never; }>;


export type FramedImageQuery = { frame1?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_NoBase64Fragment> }> }>, frame2?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_NoBase64Fragment> }> }>, frame3?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_NoBase64Fragment> }> }> };

export type PrismicPageParentRecursiveFragment = (
  { data?: Maybe<{ parent?: Maybe<{ document?: Maybe<(
        { data?: Maybe<{ parent?: Maybe<{ document?: Maybe<(
              { data?: Maybe<{ parent?: Maybe<{ document?: Maybe<(
                    { data?: Maybe<{ parent?: Maybe<{ document?: Maybe<PrismicPageParentFieldsFragment> }> }> }
                    & PrismicPageParentFieldsFragment
                  )> }> }> }
              & PrismicPageParentFieldsFragment
            )> }> }> }
        & PrismicPageParentFieldsFragment
      )> }> }> }
  & PrismicPageParentFieldsFragment
);

export type PrismicPageParentFieldsFragment = (
  Pick<PrismicPage, 'uid' | 'url'>
  & { data?: Maybe<{ title?: Maybe<Pick<PrismicStructuredTextType, 'text'>> }> }
);

export type UseNavigationQueryVariables = Exact<{ [key: string]: never; }>;


export type UseNavigationQuery = { header?: Maybe<{ data?: Maybe<{ main?: Maybe<Array<Maybe<(
        Pick<PrismicNavigationMainNavItem, 'id'>
        & { primary?: Maybe<(
          Pick<PrismicNavigationMainNavItemPrimaryType, 'name'>
          & { link?: Maybe<Pick<PrismicLinkType, 'url'>> }
        )> }
      )>>> }> }> };

export type PrismicSiteSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type PrismicSiteSettingsQuery = { prismicSettings?: Maybe<{ data?: Maybe<{ site_name?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, site_description?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, site_copyright?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, facebook_handle?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, twitter_handle?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, instagram_handle?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, footer_hours?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, online_order_link?: Maybe<Pick<PrismicLinkType, 'url'>>, uber_eats_link?: Maybe<Pick<PrismicLinkType, 'url'>>, doordash_link?: Maybe<Pick<PrismicLinkType, 'url'>>, mailing_list_subscription_link?: Maybe<Pick<PrismicLinkType, 'url'>> }> }> };

export type NotFoundPageQueryVariables = Exact<{ [key: string]: never; }>;


export type NotFoundPageQuery = { prismicPage?: Maybe<(
    Pick<PrismicPage, '_previewable'>
    & { data?: Maybe<(
      Pick<PrismicPageDataType, 'meta_title' | 'meta_description'>
      & { title?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, body?: Maybe<Array<Maybe<(
        { __typename: 'PrismicPageBodyDogSlideshow' }
        & Pick<PrismicPageBodyDogSlideshow, 'id'>
        & SlicesPageBody_PrismicPageBodyDogSlideshow_Fragment
      ) | (
        { __typename: 'PrismicPageBodyProductList' }
        & Pick<PrismicPageBodyProductList, 'id'>
        & SlicesPageBody_PrismicPageBodyProductList_Fragment
      ) | (
        { __typename: 'PrismicPageBodyAboutHankS' }
        & Pick<PrismicPageBodyAboutHankS, 'id'>
        & SlicesPageBody_PrismicPageBodyAboutHankS_Fragment
      ) | (
        { __typename: 'PrismicPageBodyLocations' }
        & Pick<PrismicPageBodyLocations, 'id'>
        & SlicesPageBody_PrismicPageBodyLocations_Fragment
      ) | (
        { __typename: 'PrismicPageBodyText' }
        & Pick<PrismicPageBodyText, 'id'>
        & SlicesPageBody_PrismicPageBodyText_Fragment
      ) | (
        { __typename: 'PrismicPageBodyImage' }
        & Pick<PrismicPageBodyImage, 'id'>
        & SlicesPageBody_PrismicPageBodyImage_Fragment
      )>>> }
    )> }
  )> };

type SlicesPageBody_PrismicPageBodyDogSlideshow_Fragment = PageBodyDogSlideshowFragment;

type SlicesPageBody_PrismicPageBodyProductList_Fragment = PageBodyProductListFragment;

type SlicesPageBody_PrismicPageBodyAboutHankS_Fragment = PageBodyAboutHankSFragment;

type SlicesPageBody_PrismicPageBodyLocations_Fragment = PageBodyLocationsFragment;

type SlicesPageBody_PrismicPageBodyText_Fragment = PageBodyTextFragment;

type SlicesPageBody_PrismicPageBodyImage_Fragment = PageBodyImageFragment;

export type SlicesPageBodyFragment = SlicesPageBody_PrismicPageBodyDogSlideshow_Fragment | SlicesPageBody_PrismicPageBodyProductList_Fragment | SlicesPageBody_PrismicPageBodyAboutHankS_Fragment | SlicesPageBody_PrismicPageBodyLocations_Fragment | SlicesPageBody_PrismicPageBodyText_Fragment | SlicesPageBody_PrismicPageBodyImage_Fragment;

export type PageBodyAboutHankSAssetsQueryVariables = Exact<{ [key: string]: never; }>;


export type PageBodyAboutHankSAssetsQuery = { backBoard?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_NoBase64Fragment> }> }>, clip?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_NoBase64Fragment> }> }>, frame1?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_NoBase64Fragment> }> }>, frame2?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_NoBase64Fragment> }> }>, frame3?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_NoBase64Fragment> }> }> };

export type PageBodyAboutHankSFragment = { primary?: Maybe<{ text?: Maybe<Pick<PrismicStructuredTextType, 'text' | 'html'>> }>, items?: Maybe<Array<Maybe<{ side_image?: Maybe<(
      Pick<PrismicImageType, 'alt'>
      & { fluid?: Maybe<GatsbyPrismicImageFluid_NoBase64Fragment> }
    )> }>>> };

export type PageBodyDogSlideshowImagesQueryVariables = Exact<{ [key: string]: never; }>;


export type PageBodyDogSlideshowImagesQuery = { oohlala?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_NoBase64Fragment> }> }>, doggystyle?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_NoBase64Fragment> }> }> };

export type PageBodyDogSlideshowFragment = { primary?: Maybe<{ text?: Maybe<Pick<PrismicStructuredTextType, 'text' | 'html'>> }>, items?: Maybe<Array<Maybe<{ image?: Maybe<(
      Pick<PrismicImageType, 'alt'>
      & { fluid?: Maybe<GatsbyPrismicImageFluid_NoBase64Fragment> }
    )> }>>> };

export type LocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type LocationsQuery = { allPrismicLocation: { nodes: Array<(
      Pick<PrismicLocation, 'id'>
      & { data?: Maybe<{ title?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, address?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, address_link?: Maybe<Pick<PrismicLinkType, 'url'>>, phone_number?: Maybe<Pick<PrismicStructuredTextType, 'text'>> }> }
    )> } };

export type HeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type HeaderQuery = { logo?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_NoBase64Fragment> }> }>, menuActive?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_NoBase64Fragment> }> }> };

export type PageBodyImageFragment = { primary?: Maybe<{ image?: Maybe<(
      Pick<PrismicImageType, 'alt'>
      & { fluid?: Maybe<GatsbyPrismicImageFluid_NoBase64Fragment> }
    )> }> };

export type PageBodyLocationsFragment = { items?: Maybe<Array<Maybe<{ location?: Maybe<{ document?: Maybe<{ data?: Maybe<{ title?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, address?: Maybe<Pick<PrismicStructuredTextType, 'text' | 'html'>>, address_link?: Maybe<Pick<PrismicLinkType, 'url'>>, phone_number?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, email_address?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, hours?: Maybe<Pick<PrismicStructuredTextType, 'text' | 'html'>>, jobs_link?: Maybe<Pick<PrismicLinkType, 'url'>>, image?: Maybe<(
            Pick<PrismicImageType, 'alt'>
            & { fluid?: Maybe<GatsbyPrismicImageFluid_NoBase64Fragment> }
          )> }> }> }> }>>> };

export type PageBodyProductListFragment = { primary?: Maybe<{ category_image?: Maybe<(
      Pick<PrismicImageType, 'alt'>
      & { fluid?: Maybe<GatsbyPrismicImageFluid_NoBase64Fragment> }
    )> }>, items?: Maybe<Array<Maybe<{ product?: Maybe<{ document?: Maybe<(
        Pick<PrismicProduct, 'uid'>
        & { data?: Maybe<{ title?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, description?: Maybe<Pick<PrismicStructuredTextType, 'text' | 'html'>>, image?: Maybe<(
            Pick<PrismicImageType, 'alt'>
            & { fluid?: Maybe<GatsbyPrismicImageFluid_NoBase64Fragment> }
          )> }> }
      )> }> }>>> };

export type PageBodyTextFragment = { primary?: Maybe<{ text?: Maybe<Pick<PrismicStructuredTextType, 'text' | 'html'>> }> };

export type PageTemplateQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type PageTemplateQuery = { prismicPage?: Maybe<(
    Pick<PrismicPage, '_previewable'>
    & { data?: Maybe<(
      Pick<PrismicPageDataType, 'meta_title' | 'meta_description'>
      & { title?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, body?: Maybe<Array<Maybe<(
        { __typename: 'PrismicPageBodyDogSlideshow' }
        & Pick<PrismicPageBodyDogSlideshow, 'id'>
        & SlicesPageBody_PrismicPageBodyDogSlideshow_Fragment
      ) | (
        { __typename: 'PrismicPageBodyProductList' }
        & Pick<PrismicPageBodyProductList, 'id'>
        & SlicesPageBody_PrismicPageBodyProductList_Fragment
      ) | (
        { __typename: 'PrismicPageBodyAboutHankS' }
        & Pick<PrismicPageBodyAboutHankS, 'id'>
        & SlicesPageBody_PrismicPageBodyAboutHankS_Fragment
      ) | (
        { __typename: 'PrismicPageBodyLocations' }
        & Pick<PrismicPageBodyLocations, 'id'>
        & SlicesPageBody_PrismicPageBodyLocations_Fragment
      ) | (
        { __typename: 'PrismicPageBodyText' }
        & Pick<PrismicPageBodyText, 'id'>
        & SlicesPageBody_PrismicPageBodyText_Fragment
      ) | (
        { __typename: 'PrismicPageBodyImage' }
        & Pick<PrismicPageBodyImage, 'id'>
        & SlicesPageBody_PrismicPageBodyImage_Fragment
      )>>> }
    )> }
    & PrismicPageParentRecursiveFragment
  )> };
