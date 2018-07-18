const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1dnxkdei0ztxj"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://qccnofugpl.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: " us-east-1_LrCmEX9Qf",
    APP_CLIENT_ID: "6gudho32do3cloeu2ajtcndp5e",
    IDENTITY_POOL_ID: "us-east-1:2e2f17d4-5167-4204-b345-4685b0ddd885"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-ri153ltzrcx5"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://erv2tnv2kf.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_f9mKWg7yd",
    APP_CLIENT_ID: "2o7o4sa2pql0bmnptbiuhgcm7a",
    IDENTITY_POOL_ID: "us-east-1:9c958ed8-f125-4958-a6ca-bd188e63e5fd"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};