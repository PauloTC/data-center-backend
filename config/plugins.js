module.exports = () => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: "AKIARUO3BI5AIKALEON6",
        secretAccessKey: "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",
        region: "sa-east-1",
        params: {
          Bucket: "data-center-strapi",
        },
      },
    },
  },
});
