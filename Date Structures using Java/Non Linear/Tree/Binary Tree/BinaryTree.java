import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

class Node {
    Node left;
    int data;
    Node right;

    Node(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

public class BinaryTree {
    Node root, temp;

    public void insert(Node node, int key) {
        if (node == null) {
            root = new Node(key);
            return;
        }
        Queue<Node> q = new LinkedList<Node>();
        q.add(node);
        while (!q.isEmpty()) {
            temp = q.peek();
            q.remove();

            if (temp.left == null) {
                temp.left = new Node(key);
                break;
            } else
                q.add(temp.left);

            if (temp.right == null) {
                temp.right = new Node(key);
                break;
            } else
                q.add(temp.right);
        }
    }

    public void delete(Node node, int key) {
        if (node == null)
            return;

        if (node.left == null && node.right == null) {
            if (node.data == key) {
                node = null;
                return;
            } else
                return;
        }

        Queue<Node> q = new LinkedList<Node>();
        q.add(node);

        Node keyNode = null;
        while (!q.isEmpty()) {
            temp = q.peek();
            q.remove();

            if (temp.data == key)
                keyNode = temp;

            if (temp.left != null)
                q.add(temp.left);

            if (temp.right != null)
                q.add(temp.right);
        }
        if (keyNode != null) {
            int x = temp.data;
            deleteDeepest(root, temp);
            keyNode.data = x;
        }
    }

    public void deleteDeepest(Node node, Node delNode) {
        Queue<Node> q = new LinkedList<Node>();
        q.add(node);

        while (!q.isEmpty()) {
            temp = q.peek();
            q.remove();
            // if(temp == delNode){
            // temp = null;
            // return;
            // }
            if (temp.left != null) {
                if (temp.left == delNode) {
                    temp.left = null;
                    return;
                } else
                    q.add(temp.left);
            }
            if (temp.right != null) {
                if (temp.right == delNode) {
                    temp.right = null;
                    return;
                } else
                    q.add(temp.right);
            }
        }
    }

    public void delete2(Node node, int key) {
        if (node == null)
            return;

        if (node.left == null && node.right == null) {
            if (node.data == key) {
                node = null;
                return;
            } else
                return;
        }

        Queue<Node> q = new LinkedList<Node>();
        ArrayList<Node> a = new ArrayList<Node>();
        Boolean flag = false;
        q.add(node);

        Node keyNode = null;
        while (!q.isEmpty()) {
            temp = q.peek();
            q.remove();

            if (temp.data == key){
                keyNode = temp;
                flag = true;
            }

            if (temp.left != null)
                q.add(temp.left);

            if (temp.right != null)
                q.add(temp.right);
            if(flag){
                a.add(temp);
            }
        }
        if (keyNode != null) {
            for (int i = 0; i < a.size()-1; i++) {
                a.get(i).data = a.get(i+1).data;
            }
            deleteDeepest(root, temp);
        }
    }

    public void inOrderTraversal(Node node) {
        if (node == null)
            return;

        inOrderTraversal(node.left);
        System.out.print(node.data + " ");
        inOrderTraversal(node.right);
    }

    public void BirthFirstTraversal(Node root) {
        if (root == null)
            return;

        Queue<Node> q = new LinkedList<Node>();
        q.add(root);

        while (!q.isEmpty()) {
            temp = q.peek();
            System.out.print(q.peek().data + " ");
            q.remove();

            if (temp.left != null)
                q.add(temp.left);

            if (temp.right != null)
                q.add(temp.right);
        }
    }

    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();
        tree.insert(tree.root, 1);
        tree.insert(tree.root, 2);
        tree.insert(tree.root, 3);
        tree.insert(tree.root, 4);
        tree.insert(tree.root, 5);
        tree.insert(tree.root, 6);

        // tree.inOrderTraversal(tree.root);
        tree.BirthFirstTraversal(tree.root);
        System.out.println();
        tree.delete2(tree.root, 4);

        tree.BirthFirstTraversal(tree.root);
    }
}
