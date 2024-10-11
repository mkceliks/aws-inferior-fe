const awsmobile = {
    aws_project_region: "us-east-1",
    aws_cognito_identity_pool_id: "us-east-1:xxxx",
    aws_cognito_region: "us-east-1",
    aws_user_pools_id: "us-east-1_xxxx",
    aws_user_pools_web_client_id: "xxxx",
    oauth: {},
    aws_cloud_logic_custom: [
      {
        name: "BackendAPI",
        endpoint: "https://your-api-id.execute-api.us-east-1.amazonaws.com/prod",
        region: "us-east-1"
      }
    ]
  };
  
  export default awsmobile;
  