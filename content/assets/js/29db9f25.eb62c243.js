"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[7897],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11400:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"AWS S3",keywords:["hudi","hive","aws","s3","spark","presto"],summary:"In this page, we go over how to configure Hudi with S3 filesystem.",last_modified_at:new Date("2019-12-30T19:59:57.000Z")},l=void 0,c={unversionedId:"s3_hoodie",id:"s3_hoodie",title:"AWS S3",description:"In this page, we explain how to get your Hudi spark job to store into AWS S3.",source:"@site/docs/s3_hoodie.md",sourceDirName:".",slug:"/s3_hoodie",permalink:"/docs/next/s3_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/s3_hoodie.md",tags:[],version:"current",frontMatter:{title:"AWS S3",keywords:["hudi","hive","aws","s3","spark","presto"],summary:"In this page, we go over how to configure Hudi with S3 filesystem.",last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"docs",previous:{title:"Cloud Storage",permalink:"/docs/next/cloud"},next:{title:"Google Cloud",permalink:"/docs/next/gcs_hoodie"}},u=[{value:"AWS configs",id:"aws-configs",children:[{value:"AWS Credentials",id:"aws-credentials",children:[],level:3},{value:"AWS Libs",id:"aws-libs",children:[],level:3}],level:2},{value:"AWS S3 Versioned Bucket",id:"aws-s3-versioned-bucket",children:[],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this page, we explain how to get your Hudi spark job to store into AWS S3."),(0,o.kt)("h2",{id:"aws-configs"},"AWS configs"),(0,o.kt)("p",null,"There are two configurations required for Hudi-S3 compatibility:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adding AWS Credentials for Hudi"),(0,o.kt)("li",{parentName:"ul"},"Adding required Jars to classpath")),(0,o.kt)("h3",{id:"aws-credentials"},"AWS Credentials"),(0,o.kt)("p",null,"Simplest way to use Hudi with S3, is to configure your ",(0,o.kt)("inlineCode",{parentName:"p"},"SparkSession")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"SparkContext")," with S3 credentials. Hudi will automatically pick this up and talk to S3."),(0,o.kt)("p",null,"Alternatively, add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"fs.defaultFS")," with your S3 bucket name and Hudi should be able to read/write from the bucket."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"  <property>\n      <name>fs.defaultFS</name>\n      <value>s3://ysharma</value>\n  </property>\n\n  <property>\n      <name>fs.s3.impl</name>\n      <value>org.apache.hadoop.fs.s3native.NativeS3FileSystem</value>\n  </property>\n\n  <property>\n      <name>fs.s3.awsAccessKeyId</name>\n      <value>AWS_KEY</value>\n  </property>\n\n  <property>\n       <name>fs.s3.awsSecretAccessKey</name>\n       <value>AWS_SECRET</value>\n  </property>\n\n  <property>\n       <name>fs.s3n.awsAccessKeyId</name>\n       <value>AWS_KEY</value>\n  </property>\n\n  <property>\n       <name>fs.s3n.awsSecretAccessKey</name>\n       <value>AWS_SECRET</value>\n  </property>\n")),(0,o.kt)("p",null,"Utilities such as hudi-cli or deltastreamer tool, can pick up s3 creds via environmental variable prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"HOODIE_ENV_"),". For e.g below is a bash snippet to setup\nsuch variables and then have cli be able to work on datasets stored in s3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"export HOODIE_ENV_fs_DOT_s3a_DOT_access_DOT_key=$accessKey\nexport HOODIE_ENV_fs_DOT_s3a_DOT_secret_DOT_key=$secretKey\nexport HOODIE_ENV_fs_DOT_s3_DOT_awsAccessKeyId=$accessKey\nexport HOODIE_ENV_fs_DOT_s3_DOT_awsSecretAccessKey=$secretKey\nexport HOODIE_ENV_fs_DOT_s3n_DOT_awsAccessKeyId=$accessKey\nexport HOODIE_ENV_fs_DOT_s3n_DOT_awsSecretAccessKey=$secretKey\nexport HOODIE_ENV_fs_DOT_s3n_DOT_impl=org.apache.hadoop.fs.s3a.S3AFileSystem\n")),(0,o.kt)("h3",{id:"aws-libs"},"AWS Libs"),(0,o.kt)("p",null,"AWS hadoop libraries to add to our classpath"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"com.amazonaws:aws-java-sdk:1.10.34"),(0,o.kt)("li",{parentName:"ul"},"org.apache.hadoop:hadoop-aws:2.7.3")),(0,o.kt)("p",null,"AWS glue data libraries are needed if AWS glue data is used"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"com.amazonaws.glue:aws-glue-datacatalog-hive2-client:1.11.0"),(0,o.kt)("li",{parentName:"ul"},"com.amazonaws:aws-java-sdk-glue:1.11.475")),(0,o.kt)("h2",{id:"aws-s3-versioned-bucket"},"AWS S3 Versioned Bucket"),(0,o.kt)("p",null,"With versioned buckets any object deleted creates a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeleteMarker.html"},"Delete Marker"),", as Hudi cleans up files using ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/hoodie_cleaner"},"Cleaner utility")," the number of Delete Markers increases over time.\nIt is important to configure the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html"},"Lifecycle Rule")," correctly\nto clean up these delete markers as the List operation can choke if the number of delete markers reaches 1000.\nWe recommend cleaning up Delete Markers after 1 day in Lifecycle Rule."))}d.isMDXComponent=!0}}]);