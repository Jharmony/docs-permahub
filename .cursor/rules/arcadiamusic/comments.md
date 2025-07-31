├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── .vscode
    └── settings.json
├── README.md
├── config.ts
├── lib
    ├── account.ts
    ├── arweave.ts
    ├── comments.ts
    └── isVouched.ts
├── modules
    └── comments
    │   ├── CommentItem.tsx
    │   ├── Comments.tsx
    │   ├── ReplyDialog.tsx
    │   └── ReplyItem.tsx
├── next.config.js
├── package.json
├── pages
    ├── _app.tsx
    ├── _document.tsx
    ├── api
    │   └── hello.ts
    └── index.tsx
├── pnpm-lock.yaml
├── public
    ├── favicon.ico
    ├── next.svg
    ├── thirteen.svg
    └── vercel.svg
├── scripts
    ├── add-asset-prefix.mjs
    └── remove-asset-prefix.mjs
├── styles
    ├── Home.module.css
    └── globals.css
├── tsconfig.json
├── types
    ├── declaration.d.ts
    └── index.ts
├── ui
    ├── Loader.tsx
    ├── Popover.tsx
    └── Skeleton.tsx
└── utils
    └── index.ts


/.eslintrc.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "next/core-web-vitals"
3 | }
4 | 


--------------------------------------------------------------------------------
/.gitignore:
--------------------------------------------------------------------------------
 1 | # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
 2 | 
 3 | # dependencies
 4 | node_modules
 5 | /.pnp
 6 | .pnp.js
 7 | 
 8 | # testing
 9 | /coverage
10 | 
11 | # next.js
12 | /.next/
13 | /out/
14 | 
15 | # production
16 | /build
17 | 
18 | # misc
19 | .DS_Store
20 | *.pem
21 | 
22 | # debug
23 | npm-debug.log*
24 | yarn-debug.log*
25 | yarn-error.log*
26 | .pnpm-debug.log*
27 | 
28 | # local env files
29 | .env*.local
30 | 
31 | # vercel
32 | .vercel
33 | 
34 | # typescript
35 | *.tsbuildinfo
36 | next-env.d.ts
37 | 
38 | # build
39 | dist/
40 | 
41 | # wallet
42 | wallet.json
43 | keyfile.json
44 | 
45 | # bundlr
46 | out-*


--------------------------------------------------------------------------------
/.prettierrc:
--------------------------------------------------------------------------------
1 | {}


--------------------------------------------------------------------------------
/.vscode/settings.json:
--------------------------------------------------------------------------------
1 | {
2 |   "typescript.tsdk": "node_modules/typescript/lib"
3 | }
4 | 


--------------------------------------------------------------------------------
/README.md:
--------------------------------------------------------------------------------
 1 | Experimenting with a permaweb comment/reply data protocol.
 2 | 
 3 | ## Goals/Motivations
 4 | 
 5 | Users:
 6 | 
 7 | - can comment on any piece of arweave data
 8 | - can reply to comments and other replies
 9 | - can like comments and replies (Could use stamps core?)
10 | 
11 | Devs:
12 | 
13 | - can easily query comments for any content on arweave (sdk/hooks)
14 | - can easily embed and customize comment module into their app (renderer/ui module)
15 | 


--------------------------------------------------------------------------------
/config.ts:
--------------------------------------------------------------------------------
 1 | export const config = {
 2 |   gatewayUrl: "https://g8way.io",
 3 |   twitterUrl: "https://twitter.com",
 4 |   githubUrl: "https://github.com",
 5 |   viewblockAddress: "https://viewblock.io/arweave/address",
 6 |   boringAvatars: "https://source.boringavatars.com/marble",
 7 |   accountAvatarDefault:
 8 |     "https://hky34zdnsy3xyhltbpuy6plcqt33qmenxbabevfgyjdcdux444aa.arweave.net/OrG-ZG2WN3wdcwvpjz1ihPe4MI24QBJUpsJGIdL85wA",
 9 |   testSourceTx: "oS9tolPhr8fvFEDkvcSoB9th6Ar2dToi7h8HM-jjmyE",
10 | };
11 | 


--------------------------------------------------------------------------------
/lib/account.ts:
--------------------------------------------------------------------------------
 1 | import arweaveGql, { Transaction } from "arweave-graphql";
 2 | import { isVouched } from "./isVouched";
 3 | import { config } from "../config";
 4 | import { Account } from "../types";
 5 | import { abbreviateAddress } from "../utils";
 6 | 
 7 | export const getAccount = async (address: string, gateway?: string) => {
 8 |   try {
 9 |     const res = await arweaveGql(
10 |       `${gateway || config.gatewayUrl}/graphql`
11 |     ).getTransactions({
12 |       tags: [
13 |         { name: "Content-Type", values: ["application/json"] },
14 |         { name: "Protocol", values: ["PermaProfile-v0.1"] },
15 |       ],
16 |     });
17 |     const data = res.transactions.edges
18 |       .filter((edge) => edge.node.owner.address === address)
19 |       .map((edge) => transform(edge.node as Transaction));
20 | 
21 |     const metadata = await Promise.all(data);
22 |     console.log("metadata", metadata);
23 | 
24 |     if (metadata.length >= 1) {
25 |       return metadata[0];
26 |     } else {
27 |       const vouched = await isVouched(address);
28 |       const slicedAddress = address.slice(0, 3) + address.slice(39, 42);
29 |       return {
30 |         address,
31 |         handle: abbreviateAddress({ address }),
32 |         uniqueHandle: `user#${slicedAddress}`,
33 |         bio: "No bio.",
34 |         avatar: undefined,
35 |         banner: undefined,
36 |         vouched,
37 |       };
38 |     }
39 |   } catch (error) {
40 |     console.error(error);
41 |     throw new Error("Error occured whilst fetching data");
42 |   }
43 | };
44 | 
45 | const transform = async (node: Transaction): Promise<Account> => {
46 |   const address = node.owner.address;
47 |   const handle = node.tags.find((x) => x.name === "Profile-Name")?.value;
48 |   const slicedAddress = address.slice(0, 3) + address.slice(39, 42);
49 |   const uniqueHandle = handle
50 |     ? `${handle}#${slicedAddress}`
51 |     : `user#${slicedAddress}`;
52 |   const bio = node.tags.find((x) => x.name === "Profile-Bio")?.value;
53 |   const avatar = node.tags.find((x) => x.name === "Profile-Avatar")?.value;
54 |   const banner = node.tags.find((x) => x.name === "Profile-Background")?.value;
55 |   const vouched = await isVouched(address);
56 | 
57 |   return {
58 |     address,
59 |     handle,
60 |     uniqueHandle,
61 |     bio,
62 |     avatar,
63 |     banner,
64 |     vouched,
65 |   };
66 | };
67 | 


--------------------------------------------------------------------------------
/lib/arweave.ts:
--------------------------------------------------------------------------------
1 | import Arweave from "arweave";
2 | 
3 | export const arweave = Arweave.init({});
4 | 


--------------------------------------------------------------------------------
/lib/comments.ts:
--------------------------------------------------------------------------------
 1 | import { arweave } from "./arweave";
 2 | import arweaveGql, { GetTransactionsQueryVariables } from "arweave-graphql";
 3 | import { config } from "../config";
 4 | import { Comment } from "../types";
 5 | import { getAccount } from "./account";
 6 | 
 7 | export const createComment = async ({ comment, sourceTx }: Comment) => {
 8 |   try {
 9 |     const tx = await arweave.createTransaction({
10 |       data: comment,
11 |     });
12 |     tx.addTag("Content-Type", "text/plain");
13 |     tx.addTag("Data-Protocol", "comment");
14 |     tx.addTag("Published", Date.now().toString());
15 |     tx.addTag("Data-Source", sourceTx);
16 | 
17 |     const txResult = await window.arweaveWallet.dispatch(tx);
18 |     return txResult;
19 |   } catch (error) {
20 |     throw new Error(error as any);
21 |   }
22 | };
23 | 
24 | interface CommentQueryParams {
25 |   sourceTx: string;
26 |   cursor?: string;
27 |   limit?: number;
28 | }
29 | 
30 | export const getComments = async ({
31 |   sourceTx,
32 |   cursor,
33 |   limit,
34 | }: CommentQueryParams) => {
35 |   const query: GetTransactionsQueryVariables = {
36 |     first: limit || 3,
37 |     tags: [
38 |       { name: "Content-Type", values: ["text/plain"] },
39 |       { name: "Data-Protocol", values: ["comment"] },
40 |       { name: "Data-Source", values: [sourceTx] },
41 |     ],
42 |   };
43 | 
44 |   if (cursor) {
45 |     query.after = cursor;
46 |   }
47 | 
48 |   try {
49 |     const res = await arweaveGql(
50 |       `${config.gatewayUrl}/graphql`
51 |     ).getTransactions({
52 |       ...query,
53 |     });
54 | 
55 |     const metadata = res.transactions.edges
56 |       .filter((edge) => Number(edge.node.data.size) < 320)
57 |       .filter(
58 |         (edge) => edge.node.tags.find((x) => x.name === "Published")?.value
59 |       )
60 |       .map(async (edge) => {
61 |         const owner = edge.node.owner.address;
62 |         const txid = edge.node.id;
63 |         const published = edge.node.tags.find(
64 |           (x) => x.name === "Published"
65 |         )?.value;
66 |         const account = await getAccount(owner);
67 |         const cursor = edge.cursor;
68 |         const comment = await arweave.api
69 |           .get(txid)
70 |           .then((res) => res.data)
71 |           .catch((error) => console.error(error));
72 | 
73 |         return {
74 |           owner,
75 |           txid,
76 |           published,
77 |           account,
78 |           comment,
79 |           cursor,
80 |         };
81 |       });
82 | 
83 |     const data = await Promise.all(metadata);
84 |     const hasNextPage = res.transactions.pageInfo.hasNextPage;
85 | 
86 |     return {
87 |       data,
88 |       hasNextPage,
89 |     };
90 |   } catch (error) {
91 |     console.error(error);
92 |     throw new Error("Error occured whilst fetching data");
93 |   }
94 | };
95 | 


--------------------------------------------------------------------------------
/lib/isVouched.ts:
--------------------------------------------------------------------------------
 1 | import { WarpFactory } from "warp-contracts";
 2 | 
 3 | const warp = WarpFactory.forMainnet();
 4 | 
 5 | const contract = warp
 6 |   .contract("_z0ch80z_daDUFqC9jHjfOL8nekJcok4ZRkE_UesYsk")
 7 |   .connect("use_wallet")
 8 |   .setEvaluationOptions({
 9 |     allowBigInt: true,
10 |   });
11 | 
12 | export const isVouched = async (address: string) => {
13 |   const { cachedValue }: any = await contract.readState();
14 |   return cachedValue.state.vouched[address] !== undefined;
15 | };
16 | 


--------------------------------------------------------------------------------
/modules/comments/CommentItem.tsx:
--------------------------------------------------------------------------------
  1 | import {
  2 |   Avatar,
  3 |   AvatarFallback,
  4 |   AvatarImage,
  5 |   Box,
  6 |   Button,
  7 |   Flex,
  8 |   Typography,
  9 | } from "@aura-ui/react";
 10 | import { abbreviateAddress, timeAgo } from "../../utils";
 11 | import { BsPatchCheckFill } from "react-icons/bs";
 12 | import { Account } from "../../types";
 13 | import React, { forwardRef, useEffect, useRef, useState } from "react";
 14 | import { ReplyDialog } from "./ReplyDialog";
 15 | import { useInfiniteQuery } from "@tanstack/react-query";
 16 | import { ReplyItem } from "./ReplyItem";
 17 | import { useMotionAnimate } from "motion-hooks";
 18 | import { stagger } from "motion";
 19 | import { getComments } from "../../lib/comments";
 20 | 
 21 | interface CommentItemProps {
 22 |   owner: string | undefined;
 23 |   txid: string | undefined;
 24 |   published: string | undefined;
 25 |   account: Account | undefined;
 26 |   comment: string;
 27 |   isLastItem: boolean;
 28 | }
 29 | 
 30 | export const CommentItem = forwardRef<HTMLDivElement, CommentItemProps>(
 31 |   (
 32 |     { owner, published, account, comment, txid, isLastItem }: CommentItemProps,
 33 |     ref
 34 |   ) => {
 35 |     const [openReplyDialog, setOpenReplyDialog] = useState(false);
 36 |     const replyRef = useRef<HTMLDivElement | null>(null);
 37 |     const { play } = useMotionAnimate(
 38 |       ".reply",
 39 |       { opacity: 1 },
 40 |       {
 41 |         delay: stagger(0.075),
 42 |         duration: 0.75,
 43 |         easing: "ease-in-out",
 44 |       }
 45 |     );
 46 |     const {
 47 |       data: repliesData,
 48 |       isLoading: repliesLoading,
 49 |       isError: repliesError,
 50 |       fetchNextPage,
 51 |       hasNextPage: moreReplies,
 52 |       isFetchingNextPage,
 53 |     } = useInfiniteQuery({
 54 |       queryKey: [`comment-reply-for${txid}`],
 55 |       // cacheTime: 1 * 60 * 1000,
 56 |       enabled: !!txid,
 57 |       queryFn: ({ pageParam }) => {
 58 |         if (!txid) {
 59 |           throw new Error("No txid found");
 60 |         }
 61 | 
 62 |         return getComments({ sourceTx: txid, cursor: pageParam });
 63 |       },
 64 |       getNextPageParam: (lastPage) => {
 65 |         // check if we have more pages.
 66 |         if (!lastPage.hasNextPage) {
 67 |           return undefined;
 68 |         }
 69 | 
 70 |         // return the cursor of the last item on the last page.
 71 |         return lastPage.data[lastPage.data.length - 1].cursor;
 72 |       },
 73 |     });
 74 |     const name =
 75 |       account && account.handle
 76 |         ? account.handle
 77 |         : abbreviateAddress({ address: owner });
 78 | 
 79 |     const handleOpenReplyDialog = () => setOpenReplyDialog(true);
 80 |     const handleCancelReplyDialog = () => setOpenReplyDialog(false);
 81 | 
 82 |     const repliesList = repliesData?.pages.flatMap((page) => page.data);
 83 | 
 84 |     // Play the animation on mount of the component
 85 |     useEffect(() => {
 86 |       if (repliesList && repliesList.length > 0) {
 87 |         play();
 88 |       }
 89 |     }, [repliesData]);
 90 | 
 91 |     const hasReplies = repliesData && repliesData.pages[0]?.data?.length > 0;
 92 | 
 93 |     // useEffect(() => {
 94 |     //   if (repliesData && repliesData.pages[0]?.data?.length > 0) {
 95 |     //     console.log(repliesData?.pages[0]?.data[0].comment);
 96 |     //   }
 97 |     // }, [repliesData]);
 98 | 
 99 |     useEffect(() => {
100 |       console.log(account);
101 |     }, []);
102 | 
103 |     return (
104 |       <Flex
105 |         ref={ref}
106 |         // className and opacity are for motion one animation
107 |         className="comment"
108 |         css={{
109 |           opacity: 0,
110 |           pt: isLastItem ? "$1" : "$3",
111 |           pb: isLastItem || hasReplies ? 0 : "$2",
112 |           position: "relative",
113 |         }}
114 |         gap="3"
115 |       >
116 |         <Flex direction="column" gap="2" align="center">
117 |           <Avatar
118 |             css={{
119 |               size: 48,
120 |             }}
121 |             size="5"
122 |           >
123 |             <AvatarImage
124 |               src={
125 |                 account?.avatar
126 |                   ? account?.avatar
127 |                   : `https://source.boringavatars.com/marble/40/${owner}`
128 |               }
129 |             />
130 |             <AvatarFallback>{name?.slice(0, 2).toUpperCase()}</AvatarFallback>
131 |           </Avatar>
132 |           {hasReplies && !isLastItem && (
133 |             <Box
134 |               css={{
135 |                 background:
136 |                   "linear-gradient(to bottom, #313538 0%, rgba(49, 53, 56, 0) 100%)",
137 |                 // backgroundColor: "$slate5",
138 |                 flex: 1,
139 |                 width: 3,
140 |                 height: "100%",
141 |               }}
142 |             />
143 |           )}
144 |         </Flex>
145 |         <Flex css={{ width: "100%" }} direction="column" gap="1">
146 |           <Flex
147 |             css={{
148 |               "& p": { lineHeight: 1 },
149 |             }}
150 |             align="center"
151 |             gap="1"
152 |           >
153 |             <Typography contrast="hiContrast" weight="6">
154 |               {name}
155 |             </Typography>
156 |             {account?.vouched && (
157 |               <Flex
158 |                 align="center"
159 |                 justify="center"
160 |                 css={{
161 |                   "& svg": {
162 |                     fill: "$indigo11",
163 |                     size: "$4",
164 |                     verticalAlign: "middle",
165 |                   },
166 |                 }}
167 |                 as="span"
168 |               >
169 |                 <BsPatchCheckFill />
170 |               </Flex>
171 |             )}
172 |             {account?.uniqueHandle && (
173 |               <Typography>{account.uniqueHandle}</Typography>
174 |             )}
175 |             <Typography size="2">• {timeAgo(Number(published))}</Typography>
176 |           </Flex>
177 |           {comment && <Typography contrast="hiContrast">{comment}</Typography>}
178 |           <Flex align="center" gap="4">
179 |             <Button
180 |               onClick={handleOpenReplyDialog}
181 |               css={{
182 |                 p: 0,
183 |                 lineHeight: 1,
184 |                 height: "max-content",
185 |                 backgroundColor: "transparent",
186 |                 fontSize: "$1",
187 |                 gap: "$2",
188 | 
189 |                 "&:hover": {
190 |                   backgroundColor: "transparent",
191 |                   color: "$slate12",
192 |                 },
193 | 
194 |                 "&:active": {
195 |                   backgroundColor: "transparent",
196 |                   color: "$slate12",
197 |                 },
198 |               }}
199 |             >
200 |               {/* <BsChat /> 1 */}
201 |               Reply
202 |             </Button>
203 |             {/* <Button
204 |               css={{
205 |                 p: 0,
206 |                 lineHeight: 1,
207 |                 height: "max-content",
208 |                 backgroundColor: "transparent",
209 |                 fontSize: "$1",
210 |                 gap: "$2",
211 | 
212 |                 "&:hover": {
213 |                   backgroundColor: "transparent",
214 |                   color: "$slate12",
215 |                 },
216 | 
217 |                 "&:active": {
218 |                   backgroundColor: "transparent",
219 |                   color: "$slate12",
220 |                 },
221 |               }}
222 |             >
223 |               <BsHeart /> 0
224 |             </Button> */}
225 |           </Flex>
226 |           <Flex css={{ my: "$3" }} direction="column">
227 |             {repliesData &&
228 |               repliesData.pages.map((infinitePage, i) => (
229 |                 <React.Fragment key={i}>
230 |                   {infinitePage.data.map((comment) => (
231 |                     <ReplyItem
232 |                       key={comment.txid}
233 |                       txid={comment.txid}
234 |                       owner={comment.owner}
235 |                       published={comment.published}
236 |                       comment={comment.comment}
237 |                       account={comment.account}
238 |                       commentTx={txid}
239 |                       ref={replyRef}
240 |                     />
241 |                   ))}
242 |                 </React.Fragment>
243 |               ))}
244 |           </Flex>
245 |         </Flex>
246 | 
247 |         <ReplyDialog
248 |           commentor={account?.uniqueHandle}
249 |           commentTx={txid}
250 |           open={openReplyDialog}
251 |           onClose={handleCancelReplyDialog}
252 |         />
253 |       </Flex>
254 |     );
255 |   }
256 | );
257 | 


--------------------------------------------------------------------------------
/modules/comments/Comments.tsx:
--------------------------------------------------------------------------------
  1 | import {
  2 |   Avatar,
  3 |   AvatarFallback,
  4 |   AvatarImage,
  5 |   Box,
  6 |   Button,
  7 |   Flex,
  8 |   Grid,
  9 |   Textarea,
 10 |   Toast,
 11 |   Typography,
 12 | } from "@aura-ui/react";
 13 | import { FormikErrors, useFormik } from "formik";
 14 | import { getComments, createComment } from "../../lib/comments";
 15 | import { Comment } from "../../types";
 16 | import { CommentItem } from "./CommentItem";
 17 | import { Loader } from "../../ui/Loader";
 18 | import {
 19 |   useInfiniteQuery,
 20 |   useMutation,
 21 |   useQueryClient,
 22 | } from "@tanstack/react-query";
 23 | import { useConnect } from "arweave-wallet-ui-test";
 24 | import { BsChatQuoteFill } from "react-icons/bs";
 25 | import React, { useEffect, useRef, useState } from "react";
 26 | import { abbreviateAddress } from "../../utils";
 27 | import { useMotionAnimate } from "motion-hooks";
 28 | import { stagger } from "motion";
 29 | import { config } from "../../config";
 30 | 
 31 | export const Comments = () => {
 32 |   const [submitting, setSubmitting] = useState(false);
 33 |   const [commentSuccess, setCommentSuccess] = useState("");
 34 |   const [loadingMore, setLoadingMore] = useState(false);
 35 |   const { profile, walletAddress } = useConnect();
 36 |   const queryClient = useQueryClient();
 37 |   const commentRef = useRef<HTMLDivElement | null>(null);
 38 |   const { play } = useMotionAnimate(
 39 |     ".comment",
 40 |     { opacity: 1 },
 41 |     {
 42 |       delay: stagger(0.075),
 43 |       duration: 0.75,
 44 |       easing: "ease-in-out",
 45 |     }
 46 |   );
 47 |   const {
 48 |     data: commentsData,
 49 |     isLoading: commentsLoading,
 50 |     isError: commentsError,
 51 |     fetchNextPage,
 52 |     hasNextPage: moreComments,
 53 |     isFetchingNextPage,
 54 |   } = useInfiniteQuery({
 55 |     queryKey: [`comments`],
 56 |     cacheTime: 1 * 60 * 1000,
 57 |     queryFn: ({ pageParam }) =>
 58 |       getComments({ sourceTx: config.testSourceTx, cursor: pageParam }),
 59 |     getNextPageParam: (lastPage) => {
 60 |       // check if we have more pages.
 61 |       if (!lastPage.hasNextPage) {
 62 |         return undefined;
 63 |       }
 64 | 
 65 |       // return the cursor of the last item on the last page.
 66 |       return lastPage.data[lastPage.data.length - 1].cursor;
 67 |     },
 68 |   });
 69 |   const formik = useFormik<Pick<Comment, "comment">>({
 70 |     initialValues: {
 71 |       comment: "",
 72 |     },
 73 |     validateOnBlur: false,
 74 |     validateOnChange: false,
 75 |     validate: (values) => {
 76 |       const errors: FormikErrors<Pick<Comment, "comment">> = {};
 77 | 
 78 |       if (values.comment && values.comment.length < 3) {
 79 |         errors.comment = "Comment must be a minimum of 3 characters.";
 80 |       }
 81 | 
 82 |       if (values.comment && values.comment.length > 300) {
 83 |         errors.comment = "Comment must be a maximum of 300 characters.";
 84 |       }
 85 | 
 86 |       if (submitting) {
 87 |         setSubmitting(false);
 88 |       }
 89 |       return errors;
 90 |     },
 91 |     onSubmit: async (values, { setErrors, validateForm }) => {
 92 |       setSubmitting(true);
 93 |       validateForm();
 94 | 
 95 |       const wallet = await window.arweaveWallet;
 96 | 
 97 |       if (!wallet) {
 98 |         setErrors({ comment: "Connect a wallet to comment." });
 99 |         return;
100 |       }
101 | 
102 |       commentMutation.mutate({
103 |         comment: values.comment as string,
104 |         sourceTx: config.testSourceTx,
105 |       });
106 |     },
107 |   });
108 | 
109 |   const commentMutation = useMutation({
110 |     mutationFn: createComment,
111 |     onSuccess: (data) => {
112 |       if (submitting) {
113 |         setSubmitting(false);
114 |       }
115 |       setCommentSuccess(
116 |         `Comment successfully created: ${abbreviateAddress({
117 |           address: data.id,
118 |         })}`
119 |       );
120 | 
121 |       // we do this to give data time to be read back from network
122 |       setTimeout(() => {
123 |         queryClient.invalidateQueries({ queryKey: [`comments`] });
124 |       }, 250);
125 | 
126 |       formik.resetForm();
127 |     },
128 |     onError: (error: any) => {
129 |       document.body.style.pointerEvents = "none";
130 |       if (submitting) {
131 |         setSubmitting(false);
132 |       }
133 |       console.error(error);
134 |     },
135 |   });
136 | 
137 |   const commentList = commentsData?.pages.flatMap((page) => page.data);
138 | 
139 |   // Play the animation on mount of the component
140 |   useEffect(() => {
141 |     if (commentList && commentList.length > 0) {
142 |       play();
143 |     }
144 |   }, [commentsData]);
145 | 
146 |   useEffect(() => {
147 |     // prohibit scroll into view on initial load
148 |     // adding loadingMore solves issue where other actions result in fetch, scrolling at undesirable times
149 |     if (commentsData && commentsData?.pages.length > 1 && loadingMore) {
150 |       commentRef.current?.lastElementChild?.scrollIntoView({
151 |         behavior: "smooth",
152 |       });
153 |       setLoadingMore(false);
154 |     }
155 |   }, [commentsData?.pages]);
156 | 
157 |   const commentLabel = walletAddress ? "Comment" : "Connect to comment";
158 | 
159 |   return (
160 |     <>
161 |       <Flex
162 |         css={{ my: "$7", py: "$3", minWidth: 500 }}
163 |         direction="column"
164 |         gap="3"
165 |       >
166 |         <Typography as="h3" size="5" weight="6">
167 |           Comments
168 |         </Typography>
169 |         <Flex
170 |           as="form"
171 |           onSubmit={formik.handleSubmit}
172 |           css={{
173 |             p: "$3",
174 |             boxShadow: "0 0 0 1px $colors$slate3",
175 |             br: "$3",
176 | 
177 |             "&:hover": {
178 |               boxShadow: "0 0 0 1px $colors$slate4",
179 |             },
180 | 
181 |             "&:focus-within": {
182 |               boxShadow: "0 0 0 2px $colors$indigo10",
183 |             },
184 |           }}
185 |           direction="column"
186 |           gap="2"
187 |         >
188 |           <Flex gap="2">
189 |             {walletAddress && (
190 |               <Box
191 |                 css={{
192 |                   pt: "$1",
193 |                 }}
194 |               >
195 |                 <Avatar size="3">
196 |                   <AvatarImage
197 |                     src={
198 |                       profile?.avatar
199 |                         ? profile.avatar
200 |                         : `https://source.boringavatars.com/marble/40/${walletAddress}`
201 |                     }
202 |                   />
203 |                   <AvatarFallback>
204 |                     {walletAddress.slice(0, 2).toUpperCase()}
205 |                   </AvatarFallback>
206 |                 </Avatar>
207 |               </Box>
208 |             )}
209 |             <Textarea
210 |               css={{
211 |                 flex: 1,
212 | 
213 |                 boxShadow: "none",
214 |                 minHeight: 100,
215 |                 resize: "none",
216 | 
217 |                 "&:hover": {
218 |                   boxShadow: "none",
219 |                 },
220 | 
221 |                 "&:focus": {
222 |                   boxShadow: "none",
223 |                 },
224 |               }}
225 |               name="comment"
226 |               value={formik.values.comment}
227 |               onChange={formik.handleChange}
228 |               required
229 |               minLength={3}
230 |               maxLength={300}
231 |               variant="outline"
232 |               placeholder="Share your thoughts..."
233 |             />
234 |           </Flex>
235 |           <Button
236 |             type="submit"
237 |             disabled={submitting || !walletAddress || !formik.values.comment}
238 |             css={{ alignSelf: "end" }}
239 |             variant="solid"
240 |             colorScheme="indigo"
241 |           >
242 |             {submitting ? "Submitting..." : commentLabel}
243 |           </Button>
244 |         </Flex>
245 |         {formik.values.comment.length < 3 && formik.errors.comment && (
246 |           <Typography
247 |             size="2"
248 |             css={{
249 |               mt: "$2",
250 |               color: "$red11",
251 |             }}
252 |           >
253 |             {formik.errors.comment}
254 |           </Typography>
255 |         )}
256 |         <Box
257 |           css={{
258 |             mt: "$5",
259 |           }}
260 |         >
261 |           <Flex direction="column">
262 |             {commentsData?.pages.map((infinitePage, i) => (
263 |               <React.Fragment key={i}>
264 |                 {infinitePage.data.map((comment, i) => (
265 |                   <CommentItem
266 |                     key={comment.txid}
267 |                     txid={comment.txid}
268 |                     owner={comment.owner}
269 |                     published={comment.published}
270 |                     comment={comment.comment}
271 |                     account={comment.account}
272 |                     ref={commentRef}
273 |                     isLastItem={
274 |                       infinitePage.data[infinitePage.data.length - 1].txid ===
275 |                       comment.txid
276 |                     }
277 |                   />
278 |                 ))}
279 |               </React.Fragment>
280 |             ))}
281 |           </Flex>
282 |         </Box>
283 |         {commentsLoading && (
284 |           <Grid
285 |             css={{
286 |               my: "$10",
287 |               width: "100%",
288 |               min: 80,
289 |               placeItems: "center",
290 |             }}
291 |           >
292 |             <Loader />
293 |           </Grid>
294 |         )}
295 |         {/* prevent false pagination for excluded/filtered results that are not factored into hasNextPage */}
296 |         {moreComments && commentList && commentList?.length > 0 && (
297 |           <Button
298 |             disabled={isFetchingNextPage}
299 |             colorScheme="indigo"
300 |             css={{
301 |               alignSelf: "center",
302 |             }}
303 |             onClick={() => {
304 |               setLoadingMore(true);
305 |               fetchNextPage();
306 |             }}
307 |           >
308 |             {isFetchingNextPage
309 |               ? "Loading more comments..."
310 |               : "Load more comments"}
311 |           </Button>
312 |         )}
313 |         {commentsError ||
314 |           // if there is no comment items on the first page, show no data view
315 |           (commentsData?.pages[0].data.length === 0 && !commentsLoading && (
316 |             <Flex
317 |               align="center"
318 |               css={{
319 |                 my: "$10",
320 |                 "& svg": { size: "$6" },
321 |                 color: "$slate11",
322 |               }}
323 |               direction="column"
324 |               gap="5"
325 |             >
326 |               <BsChatQuoteFill />
327 |               <Typography weight="6">No comments yet...</Typography>
328 |               <Typography size="2">
329 |                 Be the first to share your thoughts!
330 |               </Typography>
331 |             </Flex>
332 |           ))}
333 |       </Flex>
334 |       <Toast
335 |         open={!!commentSuccess}
336 |         onOpenChange={() => setCommentSuccess("")}
337 |         title="Comment submitted"
338 |         description={commentSuccess}
339 |         colorScheme="green"
340 |       />
341 |     </>
342 |   );
343 | };
344 | 


--------------------------------------------------------------------------------
/modules/comments/ReplyDialog.tsx:
--------------------------------------------------------------------------------
  1 | import {
  2 |   Dialog,
  3 |   DialogContent,
  4 |   DialogOverlay,
  5 |   DialogPortal,
  6 |   Avatar,
  7 |   AvatarFallback,
  8 |   AvatarImage,
  9 |   Box,
 10 |   Button,
 11 |   Flex,
 12 |   Textarea,
 13 |   DialogClose,
 14 |   IconButton,
 15 |   Typography,
 16 | } from "@aura-ui/react";
 17 | import { FormikErrors, useFormik } from "formik";
 18 | import { useMutation, useQueryClient } from "@tanstack/react-query";
 19 | import React, { useState } from "react";
 20 | import { abbreviateAddress } from "../../utils";
 21 | import { Comment } from "../../types";
 22 | import { createComment } from "../../lib/comments";
 23 | import { useConnect } from "arweave-wallet-ui-test";
 24 | import { RxCross2 } from "react-icons/rx";
 25 | import { config } from "../../config";
 26 | 
 27 | interface ReplyDialogProps {
 28 |   open: boolean;
 29 |   onClose: () => void;
 30 |   commentTx: string | undefined;
 31 |   commentor: string | undefined;
 32 | }
 33 | 
 34 | export const ReplyDialog = ({
 35 |   open,
 36 |   onClose,
 37 |   commentTx,
 38 |   commentor,
 39 | }: ReplyDialogProps) => {
 40 |   const [submitting, setSubmitting] = useState(false);
 41 |   const { profile, walletAddress } = useConnect();
 42 |   const queryClient = useQueryClient();
 43 | 
 44 |   const commentLabel = walletAddress ? "Reply" : "Connect to reply";
 45 | 
 46 |   const formik = useFormik<Pick<Comment, "comment">>({
 47 |     initialValues: {
 48 |       comment: "",
 49 |     },
 50 |     validateOnBlur: false,
 51 |     validateOnChange: false,
 52 |     validate: (values) => {
 53 |       const errors: FormikErrors<Pick<Comment, "comment">> = {};
 54 | 
 55 |       if (values.comment && values.comment.length < 3) {
 56 |         errors.comment = "Comment must be a minimum of 3 characters.";
 57 |       }
 58 | 
 59 |       if (values.comment && values.comment.length > 300) {
 60 |         errors.comment = "Comment must be a maximum of 300 characters.";
 61 |       }
 62 | 
 63 |       if (submitting) {
 64 |         setSubmitting(false);
 65 |       }
 66 |       return errors;
 67 |     },
 68 |     onSubmit: async (values, { setErrors, validateForm }) => {
 69 |       setSubmitting(true);
 70 |       validateForm();
 71 | 
 72 |       document.body.style.pointerEvents = "auto";
 73 | 
 74 |       const wallet = await window.arweaveWallet;
 75 | 
 76 |       if (!wallet) {
 77 |         setErrors({ comment: "Connect a wallet to comment." });
 78 |         return;
 79 |       }
 80 | 
 81 |       if (!commentTx) {
 82 |         setErrors({ comment: "No tx for target comment found" });
 83 |         return;
 84 |       }
 85 | 
 86 |       commentMutation.mutate({
 87 |         comment: values.comment as string,
 88 |         sourceTx: commentTx,
 89 |       });
 90 |     },
 91 |   });
 92 | 
 93 |   const commentMutation = useMutation({
 94 |     mutationFn: createComment,
 95 |     onSuccess: (data) => {
 96 |       if (submitting) {
 97 |         setSubmitting(false);
 98 |       }
 99 |       //   setCommentSuccess(
100 |       //     `Comment successfully created: ${abbreviateAddress({
101 |       //       address: data.id,
102 |       //     })}`
103 |       //   );
104 | 
105 |       // we do this to give data time to be read back from network
106 |       setTimeout(() => {
107 |         queryClient.invalidateQueries({
108 |           queryKey: [`comment-reply-for${commentTx}`],
109 |         });
110 |       }, 250);
111 | 
112 |       formik.resetForm();
113 |       onClose();
114 |     },
115 |     onError: (error: any) => {
116 |       if (submitting) {
117 |         setSubmitting(false);
118 |       }
119 |       console.error(error);
120 |     },
121 |   });
122 | 
123 |   return (
124 |     <Dialog
125 |       open={open}
126 |       onOpenChange={() => {
127 |         queryClient.invalidateQueries({
128 |           queryKey: [`comment-reply-for${commentTx}`],
129 |         });
130 |         formik.resetForm();
131 |         onClose();
132 |       }}
133 |     >
134 |       <DialogPortal>
135 |         <DialogOverlay />
136 |         <DialogContent
137 |           css={{
138 |             p: 2,
139 |             left: "47%",
140 |           }}
141 |         >
142 |           <Flex
143 |             as="form"
144 |             onSubmit={formik.handleSubmit}
145 |             css={{
146 |               p: "$3",
147 |               boxShadow: "0 0 0 1px $colors$slate3",
148 |               br: "$3",
149 | 
150 |               "&:hover": {
151 |                 boxShadow: "0 0 0 1px $colors$slate4",
152 |               },
153 | 
154 |               "&:focus-within": {
155 |                 boxShadow: "0 0 0 2px $colors$indigo10",
156 |               },
157 |             }}
158 |             direction="column"
159 |             gap="2"
160 |           >
161 |             <Flex gap="2">
162 |               {walletAddress && (
163 |                 <Box
164 |                   css={{
165 |                     pt: "$1",
166 |                   }}
167 |                 >
168 |                   <Avatar size="3">
169 |                     <AvatarImage
170 |                       src={
171 |                         profile?.avatar
172 |                           ? profile.avatar
173 |                           : `https://source.boringavatars.com/marble/40/${walletAddress}`
174 |                       }
175 |                     />
176 |                     <AvatarFallback>
177 |                       {walletAddress.slice(0, 2).toUpperCase()}
178 |                     </AvatarFallback>
179 |                   </Avatar>
180 |                 </Box>
181 |               )}
182 |               <Textarea
183 |                 css={{
184 |                   flex: 1,
185 | 
186 |                   boxShadow: "none",
187 |                   minHeight: 100,
188 |                   resize: "none",
189 | 
190 |                   "&:hover": {
191 |                     boxShadow: "none",
192 |                   },
193 | 
194 |                   "&:focus": {
195 |                     boxShadow: "none",
196 |                   },
197 |                 }}
198 |                 name="comment"
199 |                 value={formik.values.comment}
200 |                 onChange={formik.handleChange}
201 |                 required
202 |                 minLength={3}
203 |                 maxLength={300}
204 |                 variant="outline"
205 |                 placeholder={`Replying to ${commentor}`}
206 |               />
207 |             </Flex>
208 |             <Button
209 |               type="submit"
210 |               disabled={submitting || !walletAddress || !formik.values.comment}
211 |               css={{ alignSelf: "end" }}
212 |               variant="solid"
213 |               colorScheme="indigo"
214 |             >
215 |               {submitting ? "Submitting..." : commentLabel}
216 |             </Button>
217 |           </Flex>
218 |           <DialogClose asChild>
219 |             <IconButton
220 |               size="1"
221 |               css={{
222 |                 br: "$round",
223 |               }}
224 |             >
225 |               <RxCross2 />
226 |             </IconButton>
227 |           </DialogClose>
228 |         </DialogContent>
229 |       </DialogPortal>
230 |     </Dialog>
231 |   );
232 | };
233 | 


--------------------------------------------------------------------------------
/modules/comments/ReplyItem.tsx:
--------------------------------------------------------------------------------
  1 | import {
  2 |   Avatar,
  3 |   AvatarFallback,
  4 |   AvatarImage,
  5 |   Box,
  6 |   Button,
  7 |   Flex,
  8 |   Typography,
  9 | } from "@aura-ui/react";
 10 | import { abbreviateAddress, timeAgo } from "../../utils";
 11 | import { BsPatchCheckFill } from "react-icons/bs";
 12 | import { Account } from "../../types";
 13 | import React, { forwardRef, useState } from "react";
 14 | import { ReplyDialog } from "./ReplyDialog";
 15 | 
 16 | interface ReplyItemProps {
 17 |   owner: string | undefined;
 18 |   txid: string | undefined;
 19 |   published: string | undefined;
 20 |   account: Account | undefined;
 21 |   comment: string;
 22 |   commentTx: string | undefined;
 23 | }
 24 | 
 25 | export const ReplyItem = forwardRef<HTMLDivElement, ReplyItemProps>(
 26 |   (
 27 |     { owner, published, account, comment, txid, commentTx }: ReplyItemProps,
 28 |     ref
 29 |   ) => {
 30 |     const [openReplyDialog, setOpenReplyDialog] = useState(false);
 31 |     const name =
 32 |       account && account.handle
 33 |         ? account.handle
 34 |         : abbreviateAddress({ address: owner });
 35 | 
 36 |     const handleOpenReplyDialog = () => setOpenReplyDialog(true);
 37 |     const handleCancelReplyDialog = () => setOpenReplyDialog(false);
 38 | 
 39 |     return (
 40 |       <Flex
 41 |         ref={ref}
 42 |         // className and opacity are for motion one animation
 43 |         className="reply"
 44 |         css={{
 45 |           opacity: 0,
 46 |           my: "$5",
 47 |           position: "relative",
 48 |         }}
 49 |         gap="3"
 50 |       >
 51 |         <Flex direction="column" gap="2" align="center">
 52 |           <Avatar
 53 |             css={{
 54 |               size: 48,
 55 |             }}
 56 |             size="5"
 57 |           >
 58 |             <AvatarImage
 59 |               src={
 60 |                 account?.avatar
 61 |                   ? account?.avatar
 62 |                   : `https://source.boringavatars.com/marble/40/${owner}`
 63 |               }
 64 |             />
 65 |             <AvatarFallback>{name?.slice(0, 2).toUpperCase()}</AvatarFallback>
 66 |           </Avatar>
 67 |         </Flex>
 68 |         <Flex css={{ width: "100%" }} direction="column" gap="1">
 69 |           <Flex
 70 |             css={{
 71 |               "& p": { lineHeight: 1 },
 72 |             }}
 73 |             align="center"
 74 |             gap="1"
 75 |           >
 76 |             <Typography contrast="hiContrast" weight="6">
 77 |               {name}
 78 |             </Typography>
 79 |             {account?.vouched && (
 80 |               <Box
 81 |                 css={{
 82 |                   "& svg": {
 83 |                     fill: "$indigo11",
 84 |                     size: "$4",
 85 |                     verticalAlign: "middle",
 86 |                   },
 87 |                 }}
 88 |                 as="span"
 89 |               >
 90 |                 <BsPatchCheckFill />
 91 |               </Box>
 92 |             )}
 93 |             {account?.uniqueHandle && (
 94 |               <Typography>{account.uniqueHandle}</Typography>
 95 |             )}
 96 |             <Typography size="2">• {timeAgo(Number(published))}</Typography>
 97 |           </Flex>
 98 |           {comment && <Typography contrast="hiContrast">{comment}</Typography>}
 99 |           <Flex align="center" gap="4">
100 |             <Button
101 |               onClick={handleOpenReplyDialog}
102 |               size="1"
103 |               css={{
104 |                 p: 0,
105 |                 lineHeight: 1,
106 |                 height: "max-content",
107 |                 backgroundColor: "transparent",
108 |                 fontSize: "$1",
109 |                 gap: "$2",
110 | 
111 |                 "&:hover": {
112 |                   backgroundColor: "transparent",
113 |                   color: "$slate12",
114 |                 },
115 | 
116 |                 "&:active": {
117 |                   backgroundColor: "transparent",
118 |                   color: "$slate12",
119 |                 },
120 |               }}
121 |             >
122 |               Reply
123 |             </Button>
124 |           </Flex>
125 |         </Flex>
126 | 
127 |         <ReplyDialog
128 |           commentor={account?.uniqueHandle}
129 |           commentTx={commentTx}
130 |           open={openReplyDialog}
131 |           onClose={handleCancelReplyDialog}
132 |         />
133 |       </Flex>
134 |     );
135 |   }
136 | );
137 | 


--------------------------------------------------------------------------------
/next.config.js:
--------------------------------------------------------------------------------
 1 | /** @type {import('next').NextConfig} */
 2 | const nextConfig = {
 3 |   reactStrictMode: false,
 4 |   trailingSlash: true,
 5 |   swcMinify: false,
 6 |   images: {
 7 |     domains: ["arweave.net"],
 8 |   },
 9 |   webpack: (config) => {
10 |     config.resolve.fallback = { fs: false };
11 |     return config;
12 |   },
13 | };
14 | module.exports = nextConfig;
15 | 


--------------------------------------------------------------------------------
/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "nextjs-arweave",
 3 |   "version": "0.1.0",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "dev": "next dev",
 7 |     "prebuild": "pnpm clean-build && node scripts/add-asset-prefix.mjs",
 8 |     "postbuild": "node scripts/remove-asset-prefix.mjs && prettier --write './next.config.js'",
 9 |     "build": "pnpm prebuild && next build && next export && pnpm postbuild",
10 |     "upload": "pnpm build && pnpm bundlr",
11 |     "upload-nc": "pnpm build && pnpm bundlr --no-confirmation",
12 |     "bundlr": "bundlr upload-dir out -c arweave -h https://node2.bundlr.network -w ./wallet.json --index-file index.html",
13 |     "start": "next start",
14 |     "lint": "next lint",
15 |     "format": "prettier --write '**/*.{json,md,mjs,js,ts,jsx,tsx,yml,css}'",
16 |     "clean": "pnpm clean-build && rm -rf node_modules",
17 |     "clean-build": "rm -rf out*"
18 |   },
19 |   "dependencies": {
20 |     "@aura-ui/react": "0.0.5-alpha.3",
21 |     "@next/font": "13.1.6",
22 |     "@tanstack/react-query": "4.28.0",
23 |     "arweave": "1.13.7",
24 |     "arweave-graphql": "0.0.5",
25 |     "arweave-wallet-ui-test": "0.0.12",
26 |     "date-fns": "2.29.3",
27 |     "formik": "2.2.9",
28 |     "motion": "10.15.5",
29 |     "motion-hooks": "0.1.1",
30 |     "next": "13.1.6",
31 |     "next-themes": "^0.2.1",
32 |     "react": "18.2.0",
33 |     "react-dom": "18.2.0",
34 |     "react-icons": "4.9.0",
35 |     "warp-contracts": "1.2.52"
36 |   },
37 |   "devDependencies": {
38 |     "@types/node": "18.11.18",
39 |     "@types/react": "18.0.27",
40 |     "@types/react-dom": "18.0.10",
41 |     "arlocal": "1.1.60",
42 |     "eslint": "8.33.0",
43 |     "eslint-config-next": "13.1.6",
44 |     "prettier": "2.8.4",
45 |     "typescript": "4.7.4"
46 |   }
47 | }
48 | 


--------------------------------------------------------------------------------
/pages/_app.tsx:
--------------------------------------------------------------------------------
 1 | import type { AppProps } from "next/app";
 2 | import { darkTheme, globalCss, ToastProviderValues } from "@aura-ui/react";
 3 | import { ThemeProvider } from "next-themes";
 4 | import { ConnectProvider } from "arweave-wallet-ui-test";
 5 | import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
 6 | 
 7 | const globalStyles = globalCss({
 8 |   "*, *::before, *::after": {
 9 |     boxSizing: "inherit",
10 |   },
11 |   "*": {
12 |     "*:focus:not(.focus-visible)": {
13 |       outline: "none",
14 |     },
15 |   },
16 |   "html, body, #root, #__next": {
17 |     height: "100%",
18 |     fontFamily: "$body",
19 |     margin: 0,
20 |     backgroundColor: "$slate1",
21 |   },
22 | 
23 |   "#__next": {
24 |     position: "relative",
25 |     zIndex: 0,
26 |   },
27 |   a: {
28 |     textDecoration: "none",
29 |   },
30 | });
31 | 
32 | globalStyles();
33 | 
34 | const queryClient = new QueryClient();
35 | 
36 | export default function App({ Component, pageProps }: AppProps) {
37 |   return (
38 |     <QueryClientProvider client={queryClient}>
39 |       <ToastProviderValues>
40 |         <ConnectProvider>
41 |           <ThemeProvider
42 |             disableTransitionOnChange
43 |             attribute="class"
44 |             value={{ light: "light-theme", dark: darkTheme.toString() }}
45 |           >
46 |             <Component {...pageProps} />
47 |           </ThemeProvider>
48 |         </ConnectProvider>
49 |       </ToastProviderValues>
50 |     </QueryClientProvider>
51 |   );
52 | }
53 | 


--------------------------------------------------------------------------------
/pages/_document.tsx:
--------------------------------------------------------------------------------
 1 | import React from "react";
 2 | import NextDocument, { Html, Head, Main, NextScript } from "next/document";
 3 | import { getCssText } from "@aura-ui/react";
 4 | 
 5 | export default class Document extends NextDocument {
 6 |   render() {
 7 |     return (
 8 |       <Html lang="en">
 9 |         <Head>
10 |           <style
11 |             id="stitches"
12 |             dangerouslySetInnerHTML={{ __html: getCssText() }}
13 |           />
14 |         </Head>
15 |         <body>
16 |           <Main />
17 |           <NextScript />
18 |         </body>
19 |       </Html>
20 |     );
21 |   }
22 | }
23 | 


--------------------------------------------------------------------------------
/pages/api/hello.ts:
--------------------------------------------------------------------------------
 1 | // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 2 | import type { NextApiRequest, NextApiResponse } from 'next'
 3 | 
 4 | type Data = {
 5 |   name: string
 6 | }
 7 | 
 8 | export default function handler(
 9 |   req: NextApiRequest,
10 |   res: NextApiResponse<Data>
11 | ) {
12 |   res.status(200).json({ name: 'John Doe' })
13 | }
14 | 


--------------------------------------------------------------------------------
/pages/index.tsx:
--------------------------------------------------------------------------------
 1 | import Head from "next/head";
 2 | import { Flex, styled } from "@aura-ui/react";
 3 | import { ConnectWallet } from "arweave-wallet-ui-test";
 4 | import { Comments } from "../modules/comments/Comments";
 5 | 
 6 | const Main = styled("main", {
 7 |   display: "flex",
 8 |   alignItems: "center",
 9 |   flexDirection: "column",
10 |   width: "100%",
11 |   height: "100%",
12 | });
13 | 
14 | export default function Home() {
15 |   return (
16 |     <>
17 |       <Head>
18 |         <title>Permaweb Comments</title>
19 |         <meta name="description" content="Generated by create next app" />
20 |         <meta name="viewport" content="width=device-width, initial-scale=1" />
21 |         <link rel="icon" href="favicon.ico" />
22 |       </Head>
23 |       <Flex
24 |         css={{
25 |           p: "$5",
26 |         }}
27 |         justify="end"
28 |       >
29 |         <ConnectWallet
30 |           permissions={["ACCESS_ADDRESS", "ACCESS_ALL_ADDRESSES", "DISPATCH"]}
31 |           appName="Permaweb Comments"
32 |           options={{
33 |             connectButtonColorScheme: "indigo",
34 |             connectButtonVariant: "solid",
35 |           }}
36 |         />
37 |       </Flex>
38 |       <Main>
39 |         <Comments />
40 |       </Main>
41 |     </>
42 |   );
43 | }
44 | 


--------------------------------------------------------------------------------
/public/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/gregogun/permaweb-comments/2dfc978de618c617b97281f20c5c3a8e7556675c/public/favicon.ico


--------------------------------------------------------------------------------
/public/next.svg:
--------------------------------------------------------------------------------
1 | <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>


--------------------------------------------------------------------------------
/public/thirteen.svg:
--------------------------------------------------------------------------------
1 | <svg xmlns="http://www.w3.org/2000/svg" width="40" height="31" fill="none"><g opacity=".9"><path fill="url(#a)" d="M13 .4v29.3H7V6.3h-.2L0 10.5V5L7.2.4H13Z"/><path fill="url(#b)" d="M28.8 30.1c-2.2 0-4-.3-5.7-1-1.7-.8-3-1.8-4-3.1a7.7 7.7 0 0 1-1.4-4.6h6.2c0 .8.3 1.4.7 2 .4.5 1 .9 1.7 1.2.7.3 1.6.4 2.5.4 1 0 1.7-.2 2.5-.5.7-.3 1.3-.8 1.7-1.4.4-.6.6-1.2.6-2s-.2-1.5-.7-2.1c-.4-.6-1-1-1.8-1.4-.8-.4-1.8-.5-2.9-.5h-2.7v-4.6h2.7a6 6 0 0 0 2.5-.5 4 4 0 0 0 1.7-1.3c.4-.6.6-1.3.6-2a3.5 3.5 0 0 0-2-3.3 5.6 5.6 0 0 0-4.5 0 4 4 0 0 0-1.7 1.2c-.4.6-.6 1.2-.6 2h-6c0-1.7.6-3.2 1.5-4.5 1-1.3 2.2-2.3 3.8-3C25 .4 26.8 0 28.8 0s3.8.4 5.3 1.1c1.5.7 2.7 1.7 3.6 3a7.2 7.2 0 0 1 1.2 4.2c0 1.6-.5 3-1.5 4a7 7 0 0 1-4 2.2v.2c2.2.3 3.8 1 5 2.2a6.4 6.4 0 0 1 1.6 4.6c0 1.7-.5 3.1-1.4 4.4a9.7 9.7 0 0 1-4 3.1c-1.7.8-3.7 1.1-5.8 1.1Z"/></g><defs><linearGradient id="a" x1="20" x2="20" y1="0" y2="30.1" gradientUnits="userSpaceOnUse"><stop/><stop offset="1" stop-color="#3D3D3D"/></linearGradient><linearGradient id="b" x1="20" x2="20" y1="0" y2="30.1" gradientUnits="userSpaceOnUse"><stop/><stop offset="1" stop-color="#3D3D3D"/></linearGradient></defs></svg>


--------------------------------------------------------------------------------
/public/vercel.svg:
--------------------------------------------------------------------------------
1 | <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 283 64"><path fill="black" d="M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z"/></svg>


--------------------------------------------------------------------------------
/scripts/add-asset-prefix.mjs:
--------------------------------------------------------------------------------
 1 | import fs from "fs";
 2 | 
 3 | async function main() {
 4 | const filePath = './next.config.js';
 5 | 
 6 | fs.readFile(filePath, 'utf8', (err, data) => {
 7 |   if (err) {
 8 |     console.error(err);
 9 |     return;
10 |   }
11 | 
12 |   if (data.includes('assetPrefix: \'./\',\n')) {
13 |     console.log('assetPrefix property already exists in next.config.js');
14 |     return;
15 |   }
16 | 
17 | 
18 |   const updatedData = data.replace(
19 |     /const nextConfig = {/,
20 |     `const nextConfig = {\n  assetPrefix: './',`
21 |   );
22 | 
23 |   fs.writeFile(filePath, updatedData, (err) => {
24 |     if (err) {
25 |       console.error(err);
26 |       return;
27 |     }
28 | 
29 |     console.log('assetPrefix property has been added to next.config.js');
30 |   });
31 | });
32 | }
33 | 
34 | main();


--------------------------------------------------------------------------------
/scripts/remove-asset-prefix.mjs:
--------------------------------------------------------------------------------
 1 | import fs from "fs";
 2 | 
 3 | async function main() {
 4 | const filePath = './next.config.js';
 5 | 
 6 | fs.readFile(filePath, 'utf8', (err, data) => {
 7 |   if (err) {
 8 |     console.error(err);
 9 |     return;
10 |   }
11 | 
12 |   const updatedData = data.replace(
13 |     /assetPrefix: '\.\/',\n?/,
14 |     ''
15 |   );
16 | 
17 |   fs.writeFile(filePath, updatedData, (err) => {
18 |     if (err) {
19 |       console.error(err);
20 |       return;
21 |     }
22 | 
23 |     console.log('assetPrefix property has been removed from next.config.js');
24 |   });
25 | });
26 | }
27 | 
28 | main();


--------------------------------------------------------------------------------
/styles/Home.module.css:
--------------------------------------------------------------------------------
  1 | .main {
  2 |   display: flex;
  3 |   flex-direction: column;
  4 |   justify-content: center;
  5 |   align-items: center;
  6 |   padding: 6rem;
  7 |   min-height: 100vh;
  8 | }
  9 | 
 10 | .description {
 11 |   display: inherit;
 12 |   justify-content: inherit;
 13 |   align-items: inherit;
 14 |   font-size: 0.85rem;
 15 |   max-width: var(--max-width);
 16 |   width: 100%;
 17 |   z-index: 2;
 18 |   font-family: var(--font-mono);
 19 | }
 20 | 
 21 | .description a {
 22 |   display: flex;
 23 |   justify-content: center;
 24 |   align-items: center;
 25 |   gap: 0.5rem;
 26 | }
 27 | 
 28 | .description p {
 29 |   position: relative;
 30 |   margin: 0;
 31 |   padding: 1rem;
 32 |   background-color: rgba(var(--callout-rgb), 0.5);
 33 |   border: 1px solid rgba(var(--callout-border-rgb), 0.3);
 34 |   border-radius: var(--border-radius);
 35 | }
 36 | 
 37 | .code {
 38 |   font-weight: 700;
 39 |   font-family: var(--font-mono);
 40 | }
 41 | 
 42 | .grid {
 43 |   display: grid;
 44 |   grid-template-columns: repeat(4, minmax(25%, auto));
 45 |   width: var(--max-width);
 46 |   max-width: 100%;
 47 |   margin-top: 4rem;
 48 | }
 49 | 
 50 | .card {
 51 |   padding: 1rem 1.2rem;
 52 |   border-radius: var(--border-radius);
 53 |   background: rgba(var(--card-rgb), 0);
 54 |   border: 1px solid rgba(var(--card-border-rgb), 0);
 55 |   transition: background 200ms, border 200ms;
 56 | }
 57 | 
 58 | .card span {
 59 |   display: inline-block;
 60 |   transition: transform 200ms;
 61 | }
 62 | 
 63 | .card h2 {
 64 |   font-weight: 600;
 65 |   margin-bottom: 0.7rem;
 66 | }
 67 | 
 68 | .card p {
 69 |   margin: 0;
 70 |   opacity: 0.6;
 71 |   font-size: 0.9rem;
 72 |   line-height: 1.5;
 73 |   max-width: 30ch;
 74 | }
 75 | 
 76 | .center {
 77 |   display: flex;
 78 |   justify-content: center;
 79 |   align-items: center;
 80 |   position: relative;
 81 |   padding: 4rem 0;
 82 | }
 83 | 
 84 | .center::before {
 85 |   background: var(--secondary-glow);
 86 |   border-radius: 50%;
 87 |   width: 480px;
 88 |   height: 360px;
 89 |   margin-left: -400px;
 90 | }
 91 | 
 92 | .center::after {
 93 |   background: var(--primary-glow);
 94 |   width: 240px;
 95 |   height: 180px;
 96 |   z-index: -1;
 97 | }
 98 | 
 99 | .center::before,
100 | .center::after {
101 |   content: "";
102 |   left: 50%;
103 |   position: absolute;
104 |   filter: blur(45px);
105 |   transform: translateZ(0);
106 | }
107 | 
108 | .logo,
109 | .thirteen {
110 |   position: relative;
111 | }
112 | 
113 | .thirteen {
114 |   display: flex;
115 |   justify-content: center;
116 |   align-items: center;
117 |   width: 75px;
118 |   height: 75px;
119 |   padding: 25px 10px;
120 |   margin-left: 16px;
121 |   transform: translateZ(0);
122 |   border-radius: var(--border-radius);
123 |   overflow: hidden;
124 |   box-shadow: 0px 2px 8px -1px #0000001a;
125 | }
126 | 
127 | .thirteen::before,
128 | .thirteen::after {
129 |   content: "";
130 |   position: absolute;
131 |   z-index: -1;
132 | }
133 | 
134 | /* Conic Gradient Animation */
135 | .thirteen::before {
136 |   animation: 6s rotate linear infinite;
137 |   width: 200%;
138 |   height: 200%;
139 |   background: var(--tile-border);
140 | }
141 | 
142 | /* Inner Square */
143 | .thirteen::after {
144 |   inset: 0;
145 |   padding: 1px;
146 |   border-radius: var(--border-radius);
147 |   background: linear-gradient(
148 |     to bottom right,
149 |     rgba(var(--tile-start-rgb), 1),
150 |     rgba(var(--tile-end-rgb), 1)
151 |   );
152 |   background-clip: content-box;
153 | }
154 | 
155 | /* Enable hover only on non-touch devices */
156 | @media (hover: hover) and (pointer: fine) {
157 |   .card:hover {
158 |     background: rgba(var(--card-rgb), 0.1);
159 |     border: 1px solid rgba(var(--card-border-rgb), 0.15);
160 |   }
161 | 
162 |   .card:hover span {
163 |     transform: translateX(4px);
164 |   }
165 | }
166 | 
167 | @media (prefers-reduced-motion) {
168 |   .thirteen::before {
169 |     animation: none;
170 |   }
171 | 
172 |   .card:hover span {
173 |     transform: none;
174 |   }
175 | }
176 | 
177 | /* Mobile */
178 | @media (max-width: 700px) {
179 |   .content {
180 |     padding: 4rem;
181 |   }
182 | 
183 |   .grid {
184 |     grid-template-columns: 1fr;
185 |     margin-bottom: 120px;
186 |     max-width: 320px;
187 |     text-align: center;
188 |   }
189 | 
190 |   .card {
191 |     padding: 1rem 2.5rem;
192 |     z-index: 1;
193 |   }
194 | 
195 |   .card h2 {
196 |     margin-bottom: 0.5rem;
197 |   }
198 | 
199 |   .center {
200 |     padding: 8rem 0 6rem;
201 |   }
202 | 
203 |   .center::before {
204 |     transform: none;
205 |     height: 300px;
206 |   }
207 | 
208 |   .description {
209 |     font-size: 0.8rem;
210 |   }
211 | 
212 |   .description a {
213 |     padding: 1rem;
214 |   }
215 | 
216 |   .description p,
217 |   .description div {
218 |     display: flex;
219 |     justify-content: center;
220 |     position: fixed;
221 |     width: 100%;
222 |   }
223 | 
224 |   .description p {
225 |     align-items: center;
226 |     inset: 0 0 auto;
227 |     padding: 2rem 1rem 1.4rem;
228 |     border-radius: 0;
229 |     border: none;
230 |     border-bottom: 1px solid rgba(var(--callout-border-rgb), 0.25);
231 |     background: linear-gradient(
232 |       to bottom,
233 |       rgba(var(--background-start-rgb), 1),
234 |       rgba(var(--callout-rgb), 0.5)
235 |     );
236 |     background-clip: padding-box;
237 |     backdrop-filter: blur(24px);
238 |   }
239 | 
240 |   .description div {
241 |     align-items: flex-end;
242 |     pointer-events: none;
243 |     inset: auto 0 0;
244 |     padding: 2rem;
245 |     height: 200px;
246 |     background: linear-gradient(
247 |       to bottom,
248 |       transparent 0%,
249 |       rgb(var(--background-end-rgb)) 40%
250 |     );
251 |     z-index: 1;
252 |   }
253 | }
254 | 
255 | /* Tablet and Smaller Desktop */
256 | @media (min-width: 701px) and (max-width: 1120px) {
257 |   .grid {
258 |     grid-template-columns: repeat(2, 50%);
259 |   }
260 | }
261 | 
262 | @media (prefers-color-scheme: dark) {
263 |   .vercelLogo {
264 |     filter: invert(1);
265 |   }
266 | 
267 |   .logo,
268 |   .thirteen img {
269 |     filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);
270 |   }
271 | }
272 | 
273 | @keyframes rotate {
274 |   from {
275 |     transform: rotate(360deg);
276 |   }
277 |   to {
278 |     transform: rotate(0deg);
279 |   }
280 | }
281 | 


--------------------------------------------------------------------------------
/styles/globals.css:
--------------------------------------------------------------------------------
  1 | :root {
  2 |   --max-width: 1100px;
  3 |   --border-radius: 12px;
  4 |   --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
  5 |     'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
  6 |     'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;
  7 | 
  8 |   --foreground-rgb: 0, 0, 0;
  9 |   --background-start-rgb: 214, 219, 220;
 10 |   --background-end-rgb: 255, 255, 255;
 11 | 
 12 |   --primary-glow: conic-gradient(
 13 |     from 180deg at 50% 50%,
 14 |     #16abff33 0deg,
 15 |     #0885ff33 55deg,
 16 |     #54d6ff33 120deg,
 17 |     #0071ff33 160deg,
 18 |     transparent 360deg
 19 |   );
 20 |   --secondary-glow: radial-gradient(
 21 |     rgba(255, 255, 255, 1),
 22 |     rgba(255, 255, 255, 0)
 23 |   );
 24 | 
 25 |   --tile-start-rgb: 239, 245, 249;
 26 |   --tile-end-rgb: 228, 232, 233;
 27 |   --tile-border: conic-gradient(
 28 |     #00000080,
 29 |     #00000040,
 30 |     #00000030,
 31 |     #00000020,
 32 |     #00000010,
 33 |     #00000010,
 34 |     #00000080
 35 |   );
 36 | 
 37 |   --callout-rgb: 238, 240, 241;
 38 |   --callout-border-rgb: 172, 175, 176;
 39 |   --card-rgb: 180, 185, 188;
 40 |   --card-border-rgb: 131, 134, 135;
 41 | }
 42 | 
 43 | @media (prefers-color-scheme: dark) {
 44 |   :root {
 45 |     --foreground-rgb: 255, 255, 255;
 46 |     --background-start-rgb: 0, 0, 0;
 47 |     --background-end-rgb: 0, 0, 0;
 48 | 
 49 |     --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));
 50 |     --secondary-glow: linear-gradient(
 51 |       to bottom right,
 52 |       rgba(1, 65, 255, 0),
 53 |       rgba(1, 65, 255, 0),
 54 |       rgba(1, 65, 255, 0.3)
 55 |     );
 56 | 
 57 |     --tile-start-rgb: 2, 13, 46;
 58 |     --tile-end-rgb: 2, 5, 19;
 59 |     --tile-border: conic-gradient(
 60 |       #ffffff80,
 61 |       #ffffff40,
 62 |       #ffffff30,
 63 |       #ffffff20,
 64 |       #ffffff10,
 65 |       #ffffff10,
 66 |       #ffffff80
 67 |     );
 68 | 
 69 |     --callout-rgb: 20, 20, 20;
 70 |     --callout-border-rgb: 108, 108, 108;
 71 |     --card-rgb: 100, 100, 100;
 72 |     --card-border-rgb: 200, 200, 200;
 73 |   }
 74 | }
 75 | 
 76 | * {
 77 |   box-sizing: border-box;
 78 |   padding: 0;
 79 |   margin: 0;
 80 | }
 81 | 
 82 | html,
 83 | body {
 84 |   max-width: 100vw;
 85 |   overflow-x: hidden;
 86 | }
 87 | 
 88 | body {
 89 |   color: rgb(var(--foreground-rgb));
 90 |   background: linear-gradient(
 91 |       to bottom,
 92 |       transparent,
 93 |       rgb(var(--background-end-rgb))
 94 |     )
 95 |     rgb(var(--background-start-rgb));
 96 |   font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 97 | }
 98 | 
 99 | a {
100 |   color: inherit;
101 |   text-decoration: none;
102 | }
103 | 
104 | @media (prefers-color-scheme: dark) {
105 |   html {
106 |     color-scheme: dark;
107 |   }
108 | }
109 | 


--------------------------------------------------------------------------------
/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "target": "es5",
 4 |     "lib": ["dom", "dom.iterable", "esnext"],
 5 |     "allowJs": true,
 6 |     "skipLibCheck": true,
 7 |     "strict": true,
 8 |     "forceConsistentCasingInFileNames": true,
 9 |     "noEmit": true,
10 |     "esModuleInterop": true,
11 |     "module": "esnext",
12 |     "moduleResolution": "node",
13 |     "resolveJsonModule": true,
14 |     "isolatedModules": true,
15 |     "jsx": "preserve",
16 |     "incremental": true,
17 |     "typeRoots": ["./index.d.ts", "./node_modules/@types"]
18 |   },
19 |   "include": [
20 |     "next-env.d.ts",
21 |     "**/*.ts",
22 |     "**/*.tsx",
23 |     "scripts/asset-prefix.js",
24 |     "index.d.ts"
25 |     // "lib/asset-sdk.ts"
26 |   ],
27 |   "exclude": ["node_modules", "deploy.ts"]
28 | }
29 | 


--------------------------------------------------------------------------------
/types/declaration.d.ts:
--------------------------------------------------------------------------------
1 | interface Window {
2 |   arweaveWallet: any;
3 | }
4 | 


--------------------------------------------------------------------------------
/types/index.ts:
--------------------------------------------------------------------------------
 1 | export interface Comment {
 2 |   comment: string;
 3 |   sourceTx: string;
 4 | }
 5 | 
 6 | export interface Account {
 7 |   address: string;
 8 |   handle: string | undefined;
 9 |   uniqueHandle: string | undefined;
10 |   bio: string | undefined;
11 |   avatar: string | undefined;
12 |   banner: string | undefined;
13 |   vouched: boolean;
14 | }
15 | 


--------------------------------------------------------------------------------
/ui/Loader.tsx:
--------------------------------------------------------------------------------
 1 | import { keyframes, styled } from "@aura-ui/react";
 2 | 
 3 | const flashing = keyframes({
 4 |   "0%": {
 5 |     opacity: 0.2,
 6 |   },
 7 |   "50%": {
 8 |     opacity: 1,
 9 |   },
10 |   "100%": {
11 |     opacity: 0.2,
12 |   },
13 | });
14 | 
15 | const Wrapper = styled("div", {
16 |   span: {
17 |     width: "8px",
18 |     height: "8px",
19 |     borderRadius: "50%",
20 |     backgroundColor: "$indigo11",
21 |     margin: "0 4px",
22 |     display: "inline-block",
23 | 
24 |     "&:nth-child(1)": {
25 |       animation: `${flashing} 1.4s infinite linear`,
26 |     },
27 | 
28 |     "&:nth-child(2)": {
29 |       animation: `${flashing} 1.4s infinite linear .2s`,
30 |     },
31 | 
32 |     "&:nth-child(3)": {
33 |       animation: `${flashing} 1.4s infinite linear .4s`,
34 |     },
35 |   },
36 | });
37 | 
38 | export const Loader = () => (
39 |   <Wrapper>
40 |     <span></span>
41 |     <span></span>
42 |     <span></span>
43 |   </Wrapper>
44 | );
45 | 


--------------------------------------------------------------------------------
/ui/Popover.tsx:
--------------------------------------------------------------------------------
 1 | import { keyframes, styled } from "@aura-ui/react";
 2 | import * as PopoverPrimitive from "@radix-ui/react-popover";
 3 | 
 4 | export const Popover = PopoverPrimitive.Root;
 5 | export const PopoverTrigger = PopoverPrimitive.Trigger;
 6 | export const PopoverPortal = PopoverPrimitive.Portal;
 7 | 
 8 | const slideUpAndFade = keyframes({
 9 |   "0%": { opacity: 0, transform: "translateY(2px)" },
10 |   "100%": { opacity: 1, transform: "translateY(0)" },
11 | });
12 | 
13 | const slideRightAndFade = keyframes({
14 |   "0%": { opacity: 0, transform: "translateX(-2px)" },
15 |   "100%": { opacity: 1, transform: "translateX(0)" },
16 | });
17 | 
18 | const slideDownAndFade = keyframes({
19 |   "0%": { opacity: 0, transform: "translateY(-2px)" },
20 |   "100%": { opacity: 1, transform: "translateY(0)" },
21 | });
22 | 
23 | const slideLeftAndFade = keyframes({
24 |   "0%": { opacity: 0, transform: "translateX(2px)" },
25 |   "100%": { opacity: 1, transform: "translateX(0)" },
26 | });
27 | 
28 | export const PopoverContent = styled(PopoverPrimitive.Content, {
29 |   br: "$3",
30 |   padding: "$5",
31 |   width: 260,
32 |   backgroundColor: "$slate1",
33 |   boxShadow: "0 0 0 1px $colors$slate5",
34 |   animationDuration: "400ms",
35 |   animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
36 |   willChange: "transform, opacity",
37 |   '&[data-state="open"]': {
38 |     '&[data-side="top"]': { animationName: slideDownAndFade },
39 |     '&[data-side="right"]': { animationName: slideLeftAndFade },
40 |     '&[data-side="bottom"]': { animationName: slideUpAndFade },
41 |     '&[data-side="left"]': { animationName: slideRightAndFade },
42 |   },
43 |   "&:focus": {
44 |     boxShadow: "0 0 0 1px $colors$slate6",
45 |   },
46 | });
47 | 
48 | export const PopoverArrow = styled(PopoverPrimitive.Arrow, {
49 |   fill: "$slate1",
50 | });
51 | 


--------------------------------------------------------------------------------
/ui/Skeleton.tsx:
--------------------------------------------------------------------------------
 1 | import { keyframes, styled } from "@aura-ui/react";
 2 | 
 3 | const loading = keyframes({
 4 |   "0%": { backgroundPosition: "200% 0" },
 5 |   "100%": { backgroundPosition: "-200% 0" },
 6 | });
 7 | 
 8 | export const Skeleton = styled("div", {
 9 |   width: 120,
10 |   br: "$3",
11 |   height: 44,
12 |   backgroundImage:
13 |     "linear-gradient(270deg, hsl(109, 0%, 6%), hsl(109, 0%, 9%), hsl(109, 0%, 9%), hsl(109, 0%, 6%))",
14 |   backgroundSize: "400% 100%",
15 |   animation: `${loading} 5s ease-in-out infinite`,
16 | });
17 | 


--------------------------------------------------------------------------------
/utils/index.ts:
--------------------------------------------------------------------------------
 1 | import { Tag } from "arweave-graphql";
 2 | import { formatDistance } from "date-fns";
 3 | 
 4 | // export const timeAgo = (date: number | undefined) => {
 5 | //   if (!date || Number.isNaN(date)) {
 6 | //     return;
 7 | //   }
 8 | //   return formatDistance(new Date(date), new Date(), {
 9 | //     addSuffix: true,
10 | //   }).replace("about", "");
11 | // };
12 | 
13 | export const timeAgo = (unixTimestamp: number | string | undefined) => {
14 |   if (!unixTimestamp) {
15 |     return;
16 |   }
17 | 
18 |   const timestamp =
19 |     typeof unixTimestamp === "number" ? unixTimestamp : Number(unixTimestamp);
20 | 
21 |   const minute = 60;
22 |   const hour = 60 * minute;
23 |   const day = 24 * hour;
24 |   const month = 30 * day;
25 |   const year = 365 * day;
26 | 
27 |   const now = Date.now();
28 | 
29 |   // check if unixTimestamp is in the future
30 |   if (timestamp > now) {
31 |     // console.log("future time");
32 |     console.error("The provided timestamp is in the future.");
33 | 
34 |     return;
35 |   }
36 | 
37 |   const differenceInSeconds = Math.round(now - timestamp) / 1000;
38 | 
39 |   if (differenceInSeconds < minute)
40 |     return Math.floor(differenceInSeconds) + "s";
41 |   else if (differenceInSeconds < hour)
42 |     return Math.floor(differenceInSeconds / minute) + "m";
43 |   else if (differenceInSeconds < day)
44 |     return Math.floor(differenceInSeconds / hour) + "h";
45 |   else if (differenceInSeconds < month)
46 |     return Math.floor(differenceInSeconds / day) + "d";
47 |   else if (differenceInSeconds < year)
48 |     return Math.floor(differenceInSeconds / month) + "mo";
49 |   else return Math.floor(differenceInSeconds / year) + "y";
50 | };
51 | 
52 | interface AbbreviateAddressOptions {
53 |   startChars?: number;
54 |   endChars?: number;
55 |   noOfEllipsis?: number;
56 | }
57 | 
58 | interface AbbreviateAddress {
59 |   address: string | undefined;
60 |   options?: AbbreviateAddressOptions;
61 | }
62 | 
63 | export const abbreviateAddress = ({
64 |   address,
65 |   options = {},
66 | }: AbbreviateAddress) => {
67 |   const { startChars = 5, endChars = 4, noOfEllipsis = 2 } = options;
68 | 
69 |   const dot = ".";
70 |   const firstFive = address?.substring(0, startChars);
71 |   const lastFour = address?.substring(address.length - endChars);
72 |   return `${firstFive}${dot.repeat(noOfEllipsis)}${lastFour}`;
73 | };
74 | 


--------------------------------------------------------------------------------

Link: https://github.com/arcadiasound/blog