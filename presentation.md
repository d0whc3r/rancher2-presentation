title: Rancher 2.x
class: animation-fade
layout: true

.bottom-bar[
  {{title}}
]

---

class: impact

# {{title}}
## Kubernetes everywhere

---

# Why Kubernetes?

--

Discover the benefits of Kubernetes for DevOps teams to orchestrate containers like Docker.

--

Learn to run apps better, heal systems automatically, improve uptime, keep costs down and users happy.

---

# Why Rancher?

--

Rancher is a complete software stack for teams adopting containers.

--

It addresses the operational and security challenges of managing multiple Kubernetes clusters across any infrastructure,
while providing DevOps teams with integrated tools for running containerized workloads.

---

# The basics

Concepts related to Kubernetes that are important for understanding how Rancher works

--

`Kubernetes` is the container cluster management standard.

--

YAML files specify containers and other resources that form an application.

--

Kubernetes performs functions such as scheduling, scaling, service discovery, health check, secret management, and configuration management.

--

A Kubernetes Cluster is a cluster that uses the Kubernetes container-orchestration system to deploy, maintain, and scale Docker containers, allowing your organization to automate application operations.

---

# About Helm

> The package manager for Kubernetes

Helm charts provide templating syntax for Kubernetes YAML manifest documents.

With Helm you can create configurable deployments instead of just using static files

---

# Roles for Nodes in Kubernetes Clusters

--

Each computing resource in a Kubernetes cluster is called a node.

--

Nodes can be either bare-metal servers or virtual machines.

--

Kubernetes classifies nodes into three types:

- **etcd** nodes
- **control plane** nodes
- **worker** nodes.

--

A Kubernetes cluster consists of at least one etcd, controlplane, and worker node.

---

## etcd nodes

--

The state of a Kubernetes cluster is maintained in etcd. The etcd nodes run the etcd database.

--

The etcd database component is a distributed key-value store used as Kubernetes storage for all cluster data, such as cluster coordination and state management.
It is recommended to run etcd on multiple nodes so that there’s always a backup available for failover.

--

Although you can run etcd on just one node, etcd requires a majority of nodes, a quorum, to agree on updates to the cluster state.
The cluster should always contain enough healthy etcd nodes to form a quorum.
For a cluster with n members, a quorum is (n/2)+1.

---

## Controlplane Nodes

--

Controlplane nodes run the Kubernetes API server, scheduler, and controller manager.

--

These nodes take care of routine tasks to ensure that your cluster maintains your configuration.

--

You can run control plane on a single node, although two or more nodes are recommended for redundancy.

--

Additionally, a single node can share the control plane and etcd roles.

---

## Worker Nodes

--

Each worker node runs the following:

- **Kubelets**: An agent that monitors the state of the node, ensuring your containers are healthy.
- **Workloads**: The containers and pods that hold your apps, as well as other types of deployments.

--

Worker nodes also run storage and networking drivers, and ingress controllers when required.

You create as many worker nodes as necessary to run your workloads.

---

# Rancher Architecture

Rancher server, its components, and how Rancher communicates with downstream Kubernetes clusters.

--

## Rancher server

The majority of Rancher 2.x software runs on the Rancher Server.

Rancher Server includes all the software components used to manage the entire Rancher deployment.

---

## Rancher server

.col-7[
The figure illustrates the high-level architecture of Rancher 2.x.

The figure depicts a Rancher Server installation that manages two downstream Kubernetes clusters:

- *Cluster 1*: created by RKE

- *Cluster 3*: created by Amazon EKS (Elastic Kubernetes Service).
]
.col-5[
.responsive[![rancher server](./images/rancher-architecture-rancher-api-server.svg)]
]

---

# Rancher Server Components

This diagram shows each component that the Rancher server is composed of:

.center[![rancher components](./images/rancher-architecture-rancher-components.svg)]

---

# Rancher/Kubernetes basic concepts

- Namespace
- Project
- Services
- Pods
- Secrets
- Storage
- Permision/roles in rancher

---

# Documentation

[https://rancher.com/docs/rancher/v2.x/en/installation/](https://rancher.com/docs/rancher/v2.x/en/installation/)

[https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/)

[https://helm.sh/](https://helm.sh/)

[https://rancher.com/docs/rancher/v2.x/en/cluster-provisioning/production/](https://rancher.com/docs/rancher/v2.x/en/cluster-provisioning/production/)

## Presentation online in github

[https://github](github.com)

---

.center.huge.primary[**DEMO TIME**]

- Deploy cluster in google cloud/aws/hetzner
- Deploy sample project using gitlab CI/CD
- Configure prometheus + grafana for entire cluster
- Configure alerts in email/slack
- Auto scaling
- Cluster backup (velero) in s3 (minio)
